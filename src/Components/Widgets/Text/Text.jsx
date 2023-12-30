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
    textAlign: props.text_align,
    fontSize: props.font_size + "px",
    fontWeight: fontStyleDecoder(props.font_style),
    letterSpacing: props.letter_spacing + "px",
    lineHeight: props.line_height,
    truncate: props.truncate,
  };

  return (
    <div style={generatedStyles} className={classBuilder("text", textOptions)}>
      <p>{props.value}</p>
    </div>
  );
}

export default Text;
