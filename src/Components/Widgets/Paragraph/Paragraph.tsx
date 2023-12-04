import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

interface ParagraphProps {
  value?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function Paragraph({ value, isSelected, onClick }: ParagraphProps) {
  const paragraphOptions = {
    size: "default",
    selected: isSelected
  };

  return (
    <div className={classBuilder("paragraph", paragraphOptions)} onClick={onClick}>
      <p>{value}</p>
    </div>
  );
}

export default Paragraph;
