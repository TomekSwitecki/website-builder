import React, { useRef, useEffect, useState } from "react";
import classBuilder from "../../../Utils/classBuilder";

function Header({ size, isSelected, onClick }) {
  const [value, setValue] = useState("");



  const headerOptions = {
    size: "default",
    selected: isSelected
  };


  return (
    <div className={classBuilder("header", headerOptions)} onClick={onClick}>
      {value}
      test
      {/* <Header size={size} value={value} /> */}
    </div>
  );
}

export default Header;
