import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";
function Header({ props }) {
  const headerOptions = {
    size: "default",
    fontStyle: "default",
  };


  const generatedStyles = {
    color: props.color,
    textTransform: props.text_casing,
    textAlign: props.text_align,
    fontWeight: fontStyleDecoder(props.font_style),
  };




  return (
    <div style={generatedStyles} className={classBuilder("header", headerOptions)}>
      {props.value.value}
      {props.size}
    </div>
  );
}

export default Header;