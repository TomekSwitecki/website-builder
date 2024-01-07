import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";
function Divider({ props }) {
    const headerOptions = {
        size: "default",
        fontStyle: "default",
    };


    const generatedStyles = {
        borderColor: props.color,
        borderStyle: props.border_style,
        borderWidth: props.border_width.value + props.border_width.unit,
        marginBlock: props.margin_block.value + props.margin_block.unit,
        marginInline: props.margin_inline.value + props.margin_inline.unit,
    };




    return (
        <hr style={generatedStyles} className="divider" />
    );
}

export default Divider;