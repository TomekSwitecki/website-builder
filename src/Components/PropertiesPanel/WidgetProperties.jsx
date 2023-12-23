import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";

import selectGenerator from "../../Utils/selectGenerator";
import TextInput from "../Designer/TextInput/TextInput";

function WidgetProperties() {
    const { updateWidget, selectedWidget } = useWidgetContext();
    const [stateProperties, setStateProperties] = useState({});

    const handleInputChange = (propName, newValue) => {
        setStateProperties((prevValues) => ({
            ...prevValues,
            [propName]: newValue,
        }));

        if (selectedWidget) {
            updateWidget(selectedWidget.id, { [propName]: newValue });
        }
    };

    useEffect(() => {
        if (selectedWidget) {
            setStateProperties(selectedWidget.props);
        }
    }, [selectedWidget]);



    const formFactory = (propName, propValue) => {
        switch (propName) {
            case "value": case "minWidth": case "maxWidth": case "setWidth": case "url":
                return <TextInput label={propName} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "number": case "strokeWidth": case "paddingInline": case "paddingBlock": case "borderRadius": case "rotation": case "gap":
                return <input type="number" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "size":
                return selectGenerator("size", stateProperties, handleInputChange);
            case "width":
                return selectGenerator("width", stateProperties, handleInputChange);
            case "flex_direction":
                return selectGenerator("flex_direction", stateProperties, handleInputChange);
            case "flex_align_items":
                return selectGenerator("flex_align_items", stateProperties, handleInputChange);
            case "flex_justify_content":
                return selectGenerator("flex_justify_content", stateProperties, handleInputChange);
            case "flex_align_content":
                return selectGenerator("flex_align_content", stateProperties, handleInputChange);
            case "color": case "backgroundColor": case "strokeColor":
                return <input type="color" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "clipOverflowContent":
                return (
                    <input
                        type="checkbox"
                        id="clipOverflowContentCheckbox"
                        name="clipOverflowContent"
                        checked={stateProperties[propName]}
                        onChange={(e) => handleInputChange(propName, e.target.checked)}
                    />
                );
            default:
                // Handle other types or use a default input field
                return null;
        }
    };

    return (
        <React.Fragment>
            {selectedWidget &&
                Object.entries(selectedWidget.props).map(([propName, propValue]) => {
                    const formField = formFactory(propName, propValue);

                    return (
                        formField && (
                            <div key={propName}>
                                <label>{propName}</label>
                                {formField}
                            </div>
                        )
                    );
                })}
        </React.Fragment>
    );
}

export default WidgetProperties;


