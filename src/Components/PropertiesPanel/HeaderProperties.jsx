import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import { widgets_library } from "../../WidgetLibrary";

function HeaderProperties(props) {
    const { updateWidget, selectedWidget } = useWidgetContext();
    const [text, setText] = useState(selectedWidget?.value);

    const handleInputChange = (e) => {
        console.log(selectedWidget)
        if (selectedWidget) {
            setText(e.target.value);
            updateWidget(selectedWidget, { value: e.target.value });
        }
    };

    useEffect(() => {
        if (selectedWidget) {
            setText(selectedWidget.props.value);
        }
    }, [selectedWidget]);

    return (
        <React.Fragment>
            <input type="text" value={text} onChange={handleInputChange}></input>
        </React.Fragment>
    )
}

export default HeaderProperties;