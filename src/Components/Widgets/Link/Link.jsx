import React, { useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import FlexContainer from "../FlexContainer/FlexContainer";


function Link({ id, props, }) {
    const { canvasWidgets, updateWidget, draggedWidget } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState([]);


    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === id);
        setInnerWidgets(innerWidgets_);
    }, [canvasWidgets]);

    useEffect(() => {
        updateWidget(id, { ["innerWidgets"]: innerWidgets })
    }, [draggedWidget, innerWidgets.length, canvasWidgets.length]);

    let propss = {
        width_type: "hug",
        width: { value: "45", min: "0", max: "100", unit: "%", },
        height_type: "fixed",
        height: { value: "25", min: "0", max: "100", unit: "px", },
        // maxWidth: { value: "", min: "0", max: "100", unit: "%" },
        // minWidth: { value: "", min: "0", max: "100", unit: "%" },
        borderRadius: { value: "0", min: "0", max: "100", unit: "px" },
        rotation: { value: "0", unit: "deg" },
        flex_direction: "horizontal",
        gap: { value: "0", unit: "px" },
        padding_inline: { value: "0", unit: "px" },
        padding_block: { value: "0", unit: "px" },
        backgroundColor: "#ffffff",
        border_color: "#000000",
        border_width: { value: "0", unit: "px" },
        innerWidgets: [],
        innerWidgets: [],
        clipOverflowContent: false,
        flex_align_items: "flex-start",
        flex_justify_content: "",
        flex_align_content: "",
    };
    return (
        <div style={{ width: props.width }} className={classBuilder("link")}>
            {props.url.value && (
                <a href={props.url.value}>
                    <FlexContainer
                        id={id} // Pass the id to FlexContainer
                        props={propss} // Pass the props object
                    />
                </a>
            )}
        </div>
    );
}



export default Link;
