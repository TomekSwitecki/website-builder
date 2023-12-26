
import React from "react";
import extractedOptions from "./extractOptions";
import SelectInput from "../Components/Designer/Select/SelectInput";
import transformLabels from "./transformLabels";
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
        <SelectInput label={transformLabels(propName)} id={propName} value={stateProperties[propName] || ""} options={options} onChange={(value) => handleInputChange(propName, value)} />
    );
};

export default selectGenerator;
