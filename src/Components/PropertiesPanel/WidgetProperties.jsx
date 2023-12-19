import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import { widgets_library } from "../../WidgetLibrary";
import extractedOptions from "../../Utils/extractOptions";
import { HeaderProps } from "../../WidgetLibrary";

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
        // console.log(typeof propName);
        switch (propName) {
            case "value": case "minWidth": case "maxWidth": case "setWidth": case "parentID":
                return <input type="text" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "number":
                return <input type="number" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "size":
                const sizeOptions = extractedOptions("size");
                return (
                    <select value={stateProperties[propName] || ""} onChange={(e) => handleInputChange(propName, e.target.value)}>
                        {sizeOptions.map((option) => (
                            <option key={option} value={option}>
                                {`${option}`}
                            </option>
                        ))}
                    </select>
                );
            case "width":
                const widthOptions = extractedOptions("width");
                return (
                    <select value={stateProperties[propName] || ""} onChange={(e) => handleInputChange(propName, e.target.value)}>
                        {widthOptions.map((option) => (
                            <option key={option} value={option}>
                                {`${option}`}
                            </option>
                        ))}
                    </select>
                );
            case "color":
                return <input type="color" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            default:
                // Handle other types or use a default input field
                return null;
        }
    };

    return (
        <React.Fragment>
            {selectedWidget &&
                Object.entries(selectedWidget.props).map(([propName, propValue]) => (
                    <div key={propName}>
                        <label>{propName}</label>
                        {formFactory(propName, propValue)}
                    </div>
                ))}

        </React.Fragment>
    )
}

export default WidgetProperties;


