import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";



function Paragraph({ props }) {
  const paragraphOptions = {
    size: "default",
  };

  return (
    <div className={classBuilder("paragraph", paragraphOptions)}>
      <p>{props.value}</p>
    </div>
  );
}

export default Paragraph;
