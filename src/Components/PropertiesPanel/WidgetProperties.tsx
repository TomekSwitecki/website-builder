import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import { widgets_library } from "../../WidgetLibrary";
import extractedOptions from "../../Utils/extractOptions";
import { HeaderProps } from "../../WidgetLibrary";

function WidgetProperties() {
    const { updateWidget, selectedWidget } = useWidgetContext();
    const [stateProperties, setStateProperties] = useState<{ [key: string]: string }>({});

    const handleInputChange = (propName: string, newValue: string) => {
        setStateProperties((prevValues) => ({
            ...prevValues,
            [propName]: newValue,
        }));

        if (selectedWidget) {
            updateWidget(selectedWidget, { [propName]: newValue });
        }
    };

    useEffect(() => {
        if (selectedWidget) {
            setStateProperties(selectedWidget.props);
        }
    }, [selectedWidget]);



    const formFactory = (propName: string, propValue: any) => {
        // console.log(typeof propName);
        switch (propName) {
            case "value":
                return <input type="text" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "number":
                return <input type="number" value={stateProperties[propName]} onChange={(e) => handleInputChange(propName, e.target.value)} />;
            case "size":
                const sizeOptions = extractedOptions("size");
                console.log(sizeOptions)
                return (
                    <select value={stateProperties[propName] || ""} onChange={(e) => handleInputChange(propName, e.target.value)}>
                        {sizeOptions.map((option: string) => (
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


