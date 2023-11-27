import React, { useRef, useEffect, useState } from "react";


function Header({ value, size }) {
  return (
    <div className={"header"}>
      <Header size={size} value={value} />
    </div>
  );
}

export default Header;
