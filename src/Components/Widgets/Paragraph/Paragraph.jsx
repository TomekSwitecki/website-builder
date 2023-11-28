import React, { useRef, useEffect, useState } from "react";

function Paragraph({ value }) {

  return (
    <div className={'paragraph'}>
      <p>{value} paragraph</p>
    </div>
  );
}

export default Paragraph;
