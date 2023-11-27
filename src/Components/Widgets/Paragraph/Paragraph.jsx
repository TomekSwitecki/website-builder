import React, { useRef, useEffect, useState } from "react";

function Paragraph({ value }) {

  return (
    <div className={'paragraph'}>
      <p>{value}</p>
    </div>
  );
}

export default Paragraph;
