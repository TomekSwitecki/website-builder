import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

interface ParagraphProps {
  props?: any;
  onClick?: () => void;
}

function Paragraph({ props }: ParagraphProps) {
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
