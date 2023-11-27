import React, { useEffect, useState, useContext } from "react";
import { verifyWidget } from "../../Utility";
import { useWidgetRenderer } from "../../Hooks/useWidgetRenderer";
import { useWidgetState } from "../../Hooks/useWidgetState";
import useWidgetContextValues from "../../Hooks/useWidgetContextValues";
import * as Utility from '../../Utility';
const classnames = (...classes) => classes.filter(Boolean).join(" ");

function FlexContainer({ align = "center", direction = "row", gap = "8", height, margin, children, ...props }) {
    const [innerWidgets, setInnerWidgets] = useState([])
    const renderWidget = useWidgetRenderer();
    const getState = useWidgetState();
    const { canvasWidgets, pointedWidget, pointedContainer, updateWidget } = useWidgetContextValues();

    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === props.id).sort(Utility.sortWidgets);
        setInnerWidgets(innerWidgets_);
        props.widget.appendedWidgets = innerWidgets;
        // console.log(props.widget.appendedWidgets);
    }, [pointedWidget, pointedContainer, canvasWidgets]);

    function renderInnerWidgets(props) {
        const innerWidgets = canvasWidgets.filter((widget) => widget.parentID === props.id).sort(Utility.sortWidgets);
        if (innerWidgets.length === 0) {
            return <div className="empty__placeholder"></div>;
        } else {
            return innerWidgets.map((widget, index) => renderWidget(widget, index, getState(widget)));
        }
    }
    return (
        <div
            className={classnames(
                "flex_container",
                `align_${align}`,
                `direction_${direction}`,
                `height_${height || "full"}`,
                `gap_${gap}`,
                `margin_${margin || "0"}`
            )}
        >

            {renderInnerWidgets(props)}

        </div>
    );
}

export default FlexContainer;
