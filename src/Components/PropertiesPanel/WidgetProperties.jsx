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
        updateWidget(selectedWidget.id, { [propName]: { ...selectedWidget.props[propName], "value": newValue } });
    };



    useEffect(() => {
        if (selectedWidget) {
            setStateProperties(selectedWidget.props);
        }
    }, [selectedWidget]);

    function generateSelector(property, stateProperties, handleInputChange) {
        return selectGenerator(property, stateProperties, handleInputChange);
    }

    const formFactory = (propName, propValue) => {
        switch (propName) {
            case "text": case "value": case "url": case "svg": case "logo_svg": case "description": case "map_url":
                return <TextInput textArea label={transformLabels(propName)} value={stateProperties[propName]?.value} onChange={(e) => handleTextInputChange(propName, e.target.value)} />
            case "width": case "height": case "font_size": case "border_width": case "size": case "speed": case "copyright": case "addres_line_1": case "addres_line_2": case "mail": case "phone": case "number": case "border_width": case "stroke_width": case "padding_inline": case "padding_block": case "margin_block": case "margin_inline": case "borderRadius": case "rotation": case "gap": case "line_height": case "letter_spacing": case "horizontal_gap": case "vertical_gap": case "logo_size":
                return <TextInput label={transformLabels(propName)} value={stateProperties[propName]?.value} unit={stateProperties[propName]?.unit} onChange={(e) => handleTextInputChange(propName, e.target.value)} isInvalid={stateProperties[propName]?.isInvalid} validationInfo={stateProperties[propName]?.validationInfo} />
            case "font_style": case "text_align": case "text_casing": case "text_decoration": case "header_size": case "width_type": case "height_type": case "flex_direction": case "flex_align_items": case "flex_justify_content": case "flex_align_content": case "border_style": case "background_size": case "link_object": case "list_type":
                return generateSelector(propName, stateProperties, handleInputChange);
            case "color": case "backgroundColor": case "stroke_color": case "fill_color": case "border_color": case "textColor":
                return <ColorSelect label={transformLabels(propName)} value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />
            case "clipOverflowContent": case "controls": case "autoplay": case "loop": case "truncate": case "transparent_fill": case "transparent_stroke": case "reverseAnimDirection": case "show_map":
                return <Checkbox id={transformLabels(propName)} name={transformLabels(propName)} label={transformLabels(propName)} checked={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.checked)} />
            default:
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


