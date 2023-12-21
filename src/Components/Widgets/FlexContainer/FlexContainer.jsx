import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../../ContextProviders/WidgetProvider";
import { useDrop } from 'react-dnd';
import { ItemTypes } from "../../../WidgetTypes";
import classnames from "classnames";



function FlexContainer({ id, align = "center", direction = "row", gap = "8", height, margin, children, props }) {
    const { canvasWidgets, widgetFactory, pointedWidget, updateWidget, draggedWidget } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState([]);
    const [recursiveInnerWidgets, setInnerRecursiveWidgets] = useState([]);

    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === id);
        setInnerWidgets(innerWidgets_);
        setInnerRecursiveWidgets(loopThroughWidgets(innerWidgets_));
    }, [pointedWidget, canvasWidgets]);

    useEffect(() => {
        updateWidget(id, { ["innerWidgets"]: innerWidgets })
        updateWidget(id, { ["recursiveInnerWidgets"]: recursiveInnerWidgets })
        console.log(props.clipOverflowContent)
    }, [pointedWidget, draggedWidget, innerWidgets.length, canvasWidgets.length]);


    function loopThroughWidgets(widgets, results = new Set()) {
        widgets.forEach((widget) => {
            const innerWidgets_ = canvasWidgets.filter((innerWidget) => innerWidget.parentID === widget.id);
            const recursiveInnerWidgets_ = loopThroughWidgets(innerWidgets_, results);
            const modifiedWidget = {
                ...widget,
                recursiveInnerWidgets: recursiveInnerWidgets_
            };
            if (widget.name === "FlexContainer") {
                modifiedWidget.recursiveInnerWidgets = loopThroughWidgets(innerWidgets_, results);
            }
            results.add(widget);

        });

        return Array.from(results);
    }

    const generatedStyles = {
        borderRadius: props.borderRadius + "px",
        gap: props.gap + "px",
        backgroundColor: props.backgroundColor,
        paddingBlock: props.paddingBlock + "px",
        paddingInline: props.paddingInline + "px",
        borderWidth: props.strokeWidth + "px",
        borderColor: props.strokeColor,
        overflow: props.clipOverflowContent ? "hidden" : "visible",
        justifyContent: props.flex_justify_content,
        alignItems: props.flex_align_items,
        alignContent: props.flex_align_content
    };

    return (
        <div
            style={generatedStyles}
            className={classnames(
                "flex_container",
                `align_${props.align}`,
                `direction_${props.flex_direction}`,
                `height_${height || "fill"}`,
                `width_${props.width}`,
                `margin_${margin || "0"}`
            )}
        >

            {widgetFactory(innerWidgets)}

        </div>
    );
}

export default FlexContainer;
