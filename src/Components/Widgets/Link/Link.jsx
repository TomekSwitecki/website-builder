import React, { useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import FlexContainer from "../FlexContainer/FlexContainer";


function Link({ id, props, }) {
    const { canvasWidgets, updateWidget, draggedWidget, orderRecalculation } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState([]);


    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === id);
        setInnerWidgets(innerWidgets_);
    }, [canvasWidgets]);

    useEffect(() => {
        updateWidget(id, { ["innerWidgets"]: innerWidgets })
    }, [draggedWidget, innerWidgets.length, canvasWidgets.length]);

    useEffect(() => {
        orderRecalculation(innerWidgets);
    }, [innerWidgets.length, canvasWidgets]);


    return (
        <div style={{ width: props.width }} className={classBuilder("link")}>
            {props.url.value && (
                <a href={props.url.value}>
                    {/* <FlexContainer
                        id={id} // Pass the id to FlexContainer
                        props={props} // Pass the props object
                    /> */}
                </a>
            )}
        </div>
    );
}



export default Link;
