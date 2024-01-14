import React, { useEffect, useState, useContext, useRef } from "react";
import { Helmet } from 'react-helmet';
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import transformLabels from "../../Utils/transformLabels";
import selectGenerator from "../../Utils/selectGenerator";
import TextInput from "../Designer/TextInput/TextInput";
import SelectInput from "../Designer/Select/SelectInput";
import FileInput from "../Designer/FileInput/FileInput";
import Checkbox from "../Designer/Checkbox/Checkbox";
import ColorSelect from "../Designer/ColorSelect/ColorSelect";


function WidgetProperties() {
    const { updateWidget, selectedWidget, canvasWidgets } = useWidgetContext();
    const [stateProperties, setStateProperties] = useState({});
    const [googleFontsUrl, setGoogleFontsUrl] = useState('');


    const handleInputChange = (propName, newValue) => {
        setStateProperties((prevValues) => ({
            ...prevValues,
            [propName]: newValue,
        }));

        if (selectedWidget) {
            updateWidget(selectedWidget.id, { [propName]: newValue });
        }
    };



    const handleTextInputChange = (propName, newValue) => {
        setStateProperties((prevValues) => {
            const numericValue = parseFloat(newValue);
            const minLimit = parseFloat(prevValues[propName].min);
            const maxLimit = parseFloat(prevValues[propName].max);

            const isInvalid = numericValue < minLimit || numericValue > maxLimit;
            const isInvalidMin = numericValue < minLimit;
            const isInvalidMax = numericValue > maxLimit;


            let validationMessage = "";

            if (isInvalidMin) {
                validationMessage = `Value must be greater than or equal to ${minLimit}`;
            } else if (isInvalidMax) {
                validationMessage = `Value must be less than or equal to ${maxLimit}`;
            }

            console.log(isInvalid)
            return {
                ...prevValues,
                [propName]: {
                    ...prevValues[propName],
                    value: newValue,
                    isInvalid: isInvalid,
                    validationInfo: validationMessage
                },
            };
        });

        //updateWidget(selectedWidget.id, { [propName]: { "value": newValue } });
        updateWidget(selectedWidget.id, { [propName]: { ...selectedWidget.props[propName], "value": newValue } });

    };



    useEffect(() => {
        if (selectedWidget) {
            setStateProperties(selectedWidget.props);
        }
    }, [selectedWidget]);



    const formFactory = (propName, propValue) => {
        switch (propName) {
            case "text": case "value": case "url": case "svg": case "logo_svg": case "description": case "map_url":
                return <TextInput textArea label={transformLabels(propName)} value={stateProperties[propName]?.value} onChange={(e) => handleTextInputChange(propName, e.target.value)} />
            case "minWidth": case "maxWidth": case "width": case "height": case "font_size": case "border_width": case "size": case "speed": case "copyright": case "addres_line_1": case "addres_line_2": case "mail": case "phone":
                return <TextInput label={transformLabels(propName)} value={stateProperties[propName]?.value} unit={stateProperties[propName]?.unit} onChange={(e) => handleTextInputChange(propName, e.target.value)} isInvalid={stateProperties[propName]?.isInvalid} validationInfo={stateProperties[propName]?.validationInfo} />
            case "number": case "border_width": case "stroke_width": case "padding_inline": case "padding_block": case "margin_block": case "margin_inline": case "borderRadius": case "rotation": case "gap": case "line_height": case "letter_spacing": case "horizontal_gap": case "vertical_gap": case "logo_size":
                return <TextInput label={transformLabels(propName)} value={stateProperties[propName]?.value} unit={stateProperties[propName]?.unit} onChange={(e) => handleTextInputChange(propName, e.target.value)} isInvalid={stateProperties[propName]?.isInvalid} validationInfo={stateProperties[propName]?.validationInfo} />
            case "file":
                return <React.Fragment>
                    <FileInput onChange={(e) => handleInputChange(propName, e.target.files[0])} onClear={(e) => handleInputChange(propName, null)} accept={"video/mp4,video/x-m4v,video/*"} />
                </React.Fragment>
            case "font_style":
                return selectGenerator("font_style", stateProperties, handleInputChange);
            case "text_align":
                return selectGenerator("text_align", stateProperties, handleInputChange);
            case "text_casing":
                return selectGenerator("text_casing", stateProperties, handleInputChange);
            case "text_decoration":
                return selectGenerator("text_decoration", stateProperties, handleInputChange);
            case "header_size":
                return selectGenerator("header_size", stateProperties, handleInputChange);
            case "width_type":
                return selectGenerator("width_type", stateProperties, handleInputChange);
            case "height_type":
                return selectGenerator("height_type", stateProperties, handleInputChange);
            case "flex_direction":
                return selectGenerator("flex_direction", stateProperties, handleInputChange);
            case "flex_align_items":
                return selectGenerator("flex_align_items", stateProperties, handleInputChange);
            case "flex_justify_content":
                return selectGenerator("flex_justify_content", stateProperties, handleInputChange);
            case "flex_align_content":
                return selectGenerator("flex_align_content", stateProperties, handleInputChange);
            case "border_style":
                return selectGenerator("border_style", stateProperties, handleInputChange);
            case "background_size":
                return selectGenerator("background_size", stateProperties, handleInputChange);
            case "list_type":
                return selectGenerator("list_type", stateProperties, handleInputChange);
            // case "link_object":
            //     return <SelectInput label={"Link object"} id={"link_object"} value={stateProperties[propName] || ""} options={canvasWidgets.map(widget => widget.id)} onChange={(value) => handleInputChange(propName, value)} />
            case "link_object":
                return selectGenerator("link_object", stateProperties, handleInputChange);
            case "color": case "backgroundColor": case "stroke_color": case "fill_color": case "border_color": case "textColor":
                return <ColorSelect label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "clipOverflowContent": case "controls": case "autoplay": case "loop": case "truncate": case "transparent_fill": case "transparent_stroke": case "reverseAnimDirection": case "show_map":
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


