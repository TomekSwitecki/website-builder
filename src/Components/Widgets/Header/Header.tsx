import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

interface HeaderProps {
  props?: any;
  onClick?: () => void;
}

function Header({ props, onClick }: HeaderProps) {
  const headerOptions = {
    size: "default",
  };

  return (
    <div style={{ color: props.color }} className={classBuilder("header", headerOptions)} onClick={onClick}>
      {props.value}
      s{props.size}
    </div>
  );
}

export default Header;