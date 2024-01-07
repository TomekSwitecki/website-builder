import React, { useRef, useEffect, useState } from "react";

function Image({ props }) {
  return (
    <img className="image" src={props.url.value}>
    </img>
  )
}

export default Image;