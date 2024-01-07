import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";


function Text({ props }) {
  const textOptions = {
    size: "default",
  };

  const generatedStyles = {
    color: props.color,
    textTransform: props.text_casing,
    textDecoration: props.text_decoration,
    textAlign: props.text_align,
    fontSize: props.font_size.value + props.font_size.unit,
    fontWeight: fontStyleDecoder(props.font_style),
    letterSpacing: props.letter_spacing.value + props.letter_spacing.unit,
    lineHeight: props.line_height,
    truncate: props.truncate,
  };
  console.log(props.value.value)
  return (
    <div style={generatedStyles} className={classBuilder("text", textOptions)}>
      <p>{props.value.value}</p>
    </div>
  );
}

export default Text;
