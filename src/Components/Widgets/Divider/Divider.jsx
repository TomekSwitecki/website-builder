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
        borderWidth: props.border_width+"px",
        marginBlock:props.margin_block+"px",
        marginInline:props.margin_inline+"px",
    };




    return (
        <hr style={generatedStyles} className="divider" />
    );
}

export default Divider;