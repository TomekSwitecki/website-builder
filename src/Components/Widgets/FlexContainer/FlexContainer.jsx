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


    return (
        <div
            className={classnames(
                "flex_container",
                `align_${align}`,
                `direction_${direction}`,
                `height_${height || "fill"}`,
                `width_${props.width}`,
                `gap_${gap}`,
                `margin_${margin || "0"}`
            )}
        >
            {props.width}
            {widgetFactory(innerWidgets)}

        </div>
    );
}

export default FlexContainer;
