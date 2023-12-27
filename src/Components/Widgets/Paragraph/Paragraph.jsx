import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";


function Paragraph({ props }) {
  const paragraphOptions = {
    size: "default",
  };

  const generatedStyles = {
    color: props.color,
    textTransform: props.text_casing,
    textAlign: props.text_align,
    fontSize: props.font_size + "px",
    fontWeight: fontStyleDecoder(props.font_style),
  };

  return (
    <div style={generatedStyles} className={classBuilder("paragraph", paragraphOptions)}>
      <p>{props.value}</p>
    </div>
  );
}

export default Paragraph;
