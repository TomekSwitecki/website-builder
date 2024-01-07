import React, { useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import { v4 as uuidv4 } from 'uuid';

function Link({ id, props, widget }) {
    const { removeWidget, canvasWidgets, widgetFactory, widgetCreate, updateWidget, selectedWidget } = useWidgetContext();
    const textOptions = {
        size: "default",
    };

    const [linkedObject, setLinkedObject] = useState(null);
    const [innerWidgets, setInnerWidgets] = useState([]);
    useEffect(() => {

        if (linkedObject && linkedObject.props.widget.name != props.link_object) {
            // console.log(linkedObject.props.widget.name)
            // console.log(linkedObject.props.widget)
            // console.log(props.link_object)
            console.log(linkedObject.props.widget)

            removeWidget(linkedObject.props.widget);
            setLinkedObject(null);
        }
        if (props.link_object && innerWidgets.length == 0) {

            const newWidget = widgetCreate(props.link_object, id, "gusdas");
            setLinkedObject(newWidget);
            updateWidget(id, { parentID: id, innerWidgetProps: newWidget });

        }
    }, [props.link_object]);

    useEffect(() => {
        const innerWidgets_ = canvasWidgets.filter((widget) => (widget.parentID === id));
        setInnerWidgets(innerWidgets_);
    }, [canvasWidgets]);



    return (
        <div className={classBuilder("link", textOptions)}>
            {props.url && (
                <a href={props.url}>{widgetFactory(innerWidgets)}</a>
            )}
        </div>
    );
}

export default Link;
