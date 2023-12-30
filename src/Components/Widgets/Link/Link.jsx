import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';


function Link({ props }) {
    const { addWidget, removeWidget, canvasWidgets, widgetLink } = useWidgetContext();
    const textOptions = {
        size: "default",
    };
    const [linkedWidget, setLinkedWidget] = useState([]);

    useEffect(() => {
        if (props.link_object && props.link_object != props.id) {
            const widget = canvasWidgets.find(widget => widget.id === props.link_object);
            console.log(widget)
            console.log(widget.component)
            setLinkedWidget(widget);
        }
    }, [props.link_object, canvasWidgets]);

    return (
        <div className={classBuilder("link", textOptions)}>
            link link
            if(linkedWidget)
            {
                widgetLink(linkedWidget)
            }

            {linkedWidget && <a href={"#"}>ss</a>}
        </div>
    );
}

export default Link;
