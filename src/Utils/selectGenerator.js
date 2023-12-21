
import React from "react";
import extractedOptions from "./extractOptions";

const selectGenerator = (propName, stateProperties, handleInputChange) => {
    const options = extractedOptions(propName);
    return (
        <select value={stateProperties[propName] || ""} onChange={(e) => handleInputChange(propName, e.target.value)}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {`${option}`}
                </option>
            ))}
        </select>
    );
};

export default selectGenerator;
