import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';

function Link({ id, props }) {
    const { removeWidget, canvasWidgets, widgetFactory, widgetCreate } = useWidgetContext();
    const textOptions = {
        size: "default",
    };
    const [innerWidgets, setInnerWidgets] = useState([]);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (innerWidgets[0]) {
            removeWidget(innerWidgets[0]);
        }

        widgetCreate(props.link_object, id);

    }, [props.link_object]);

    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => widget.parentID === id);

        // Ensure only one widget is in innerWidgets
        setInnerWidgets(innerWidgets_.slice(0, 1));

        console.log(innerWidgets);
    }, [canvasWidgets, props.link_object]);

    return (
        <div className={classBuilder("link", textOptions)}>
            {props.url && <a href={props.url}>{widgetFactory(innerWidgets)}</a>}
        </div>
    );
}

export default Link;
