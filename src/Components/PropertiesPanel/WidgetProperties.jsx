import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import transformLabels from "../../Utils/transformLabels";
import selectGenerator from "../../Utils/selectGenerator";
import TextInput from "../Designer/TextInput/TextInput";
import Checkbox from "../Designer/Checkbox/Checkbox";
import ColorSelect from "../Designer/ColorSelect/ColorSelect";

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
            case "text": case "value": case "url":
                return <TextInput textArea label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "minWidth": case "maxWidth": case "setWidth": case "font_size":
                return <TextInput label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "number": case "strokeWidth": case "paddingInline": case "paddingBlock": case "borderRadius": case "rotation": case "gap":
                return <TextInput label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "font_style":
                return selectGenerator("font_style", stateProperties, handleInputChange);
            case "text_align":
                return selectGenerator("text_align", stateProperties, handleInputChange);
            case "text_casing":
                return selectGenerator("text_casing", stateProperties, handleInputChange);
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
                return <ColorSelect label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "clipOverflowContent": case "controls": case "autoplay": case "loop":
                return <Checkbox id={transformLabels(propName)} name={transformLabels(propName)} label={transformLabels(propName)} checked={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.checked)} />
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
                            <div className="form_container" key={propName}>

                                {formField}
                            </div>
                        )
                    );
                })}
        </React.Fragment>
    );
}

export default WidgetProperties;


