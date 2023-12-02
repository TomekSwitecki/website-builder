import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

function Header({ value, size, isSelected, onClick, props }) {



  const headerOptions = {
    size: "default",
    selected: isSelected
  };


  return (
    <div className={classBuilder("header", headerOptions)} onClick={onClick}>
      {props.value}
    </div>
  );
}

export default Header;
