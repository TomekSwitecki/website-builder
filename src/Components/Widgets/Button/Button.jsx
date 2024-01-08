import React, { useRef, useEffect, useState } from "react";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";
function Button({ props }) {


    const generatedStyles = {
        color: props.color,

        backgroundColor: props.backgroundColor,
        borderColor: props.border_color,
        borderStyle: props.border_style,
        borderWidth: props.border_width.value + props.border_width.unit,
        borderRadius: props.borderRadius.value + props.borderRadius.unit,
        paddingBlock: props.padding_block.value + props.padding_block.unit,
        paddingInline: props.padding_inline.value + props.padding_inline.unit,

        textTransform: props.text_casing,
        fontSize: props.font_size.value + props.font_size.unit,
        fontWeight: fontStyleDecoder(props.font_style),
    };


    return (
        <button style={generatedStyles}>
            {props.value.value}
        </button>
    );
}

export default Button;