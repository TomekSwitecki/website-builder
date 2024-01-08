import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../../ContextProviders/WidgetProvider";
import classnames from "classnames";



function FlexContainer({ id, align = "center", direction = "row", gap = "8", height, margin, children, props }) {
    const { canvasWidgets, widgetFactory, pointedWidget, updateWidget, draggedWidget } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState([]);
    const [recursiveInnerWidgets, setInnerRecursiveWidgets] = useState([]);

    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === id);
        setInnerWidgets(innerWidgets_);
        setInnerRecursiveWidgets(loopThroughWidgets(innerWidgets_));
    }, [canvasWidgets, pointedWidget, innerWidgets.length, canvasWidgets.length]);

    useEffect(() => {
        updateWidget(id, { ["innerWidgets"]: innerWidgets })
        updateWidget(id, { ["recursiveInnerWidgets"]: recursiveInnerWidgets })
    }, [draggedWidget, innerWidgets.length, canvasWidgets.length, pointedWidget]);


    function loopThroughWidgets(widgets, results = new Set()) {
        widgets.forEach((widget) => {
            const innerWidgets_ = canvasWidgets.filter((innerWidget) => innerWidget.parentID === widget.id);
            const recursiveInnerWidgets_ = loopThroughWidgets(innerWidgets_, results);
            const modifiedWidget = {
                ...widget,
                recursiveInnerWidgets: recursiveInnerWidgets_
            };
            if (widget.name === "Container") {
                modifiedWidget.recursiveInnerWidgets = loopThroughWidgets(innerWidgets_, results);
            }
            results.add(widget);

        });

        return Array.from(results);
    }

    const generatedStyles = {
        borderRadius: props.borderRadius.value + props.borderRadius.unit,
        gap: props.gap.value + props.gap.unit,
        backgroundColor: props.backgroundColor,
        paddingBlock: props.padding_block.value + props.padding_block.unit,
        paddingInline: props.padding_inline.value + props.padding_inline.unit,
        borderWidth: props.border_width.value + props.border_width.unit,
        borderColor: props.border_color,
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
                `width_${props.width_type}`,
                `margin_${margin || "0"}`
            )}
        >

            {widgetFactory(innerWidgets)}

        </div>
    );
}

export default FlexContainer;
