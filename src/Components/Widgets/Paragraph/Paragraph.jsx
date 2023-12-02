import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";
function Paragraph({ value, isSelected, onClick, props }) {

  const paragraphOptions = {
    size: "default",
    selected: isSelected
  };


  return (
    <div className={classBuilder("paragraph", paragraphOptions)} onClick={onClick}>
      <p>{props.value}</p>
    </div>
  );
}

export default Paragraph;
