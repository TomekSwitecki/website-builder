import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

interface HeaderProps {
  value?: string;
  size?: string;
  onClick?: () => void;
}

function Header({ value, size, onClick }: HeaderProps) {
  const headerOptions = {
    size: "default",
  };

  return (
    <div className={classBuilder("header", headerOptions)} onClick={onClick}>
      {value}
    </div>
  );
}

export default Header;