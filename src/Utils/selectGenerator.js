
import React from "react";
import extractedOptions from "./extractOptions";
import SelectInput from "../Components/Designer/Select/SelectInput";

const selectGenerator = (propName, stateProperties, handleInputChange) => {
    const options = extractedOptions(propName);
    return (
        /*
        <select value={stateProperties[propName] || ""} onChange={(e) => handleInputChange(propName, e.target.value)}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {`${option}`}
                </option>
            ))}
        </select>
        */
        <SelectInput label={propName} id={propName} value={stateProperties[propName] || ""} options={options} onChange={(e) => handleInputChange(propName, e.target)} />
    );
};

export default selectGenerator;
