
import React from "react";
import extractedOptions from "./extractOptions";
import SelectInput from "../Components/Designer/Select/SelectInput";
import transformLabels from "./transformLabels";
const selectGenerator = (propName, stateProperties, handleInputChange) => {
    const options = extractedOptions(propName);
    return (
        <SelectInput label={transformLabels(propName)} id={propName} value={stateProperties[propName] || ""} options={options} onChange={(value) => handleInputChange(propName, value)} />
    );
};

export default selectGenerator;
