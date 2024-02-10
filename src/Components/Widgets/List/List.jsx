import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
import { fontStyleDecoder } from "../../../Utils/fontStyleDecoder";


function List({ props }) {
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

    lineHeight: props.line_height.value + props.line_height.unit,
  };
  console.log(props.value.value);

  const listItems = props.value.value.split('\n').map((item, index) => (
    <li style={{ marginLeft: `${props.font_size.value}${props.font_size.unit}` }} key={index}>{item.trim()}</li>
  ));

  if (props.list_type === "ordered") {
    return (
      <ol style={generatedStyles} className={classBuilder("list", textOptions)}>
        {listItems}
      </ol>
    );
  } else {
    return (
      <ul style={generatedStyles} className={classBuilder("list", textOptions)}>
        {listItems}
      </ul>
    );
  }
}

export default List;


