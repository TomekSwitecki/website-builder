import React, { useRef, useEffect, useState } from "react";

function Image({ props }) {
  return (
    <img style={{ objectFit: props.background_size }} className="image" src={props.url.value}>
    </img>
  )
}

export default Image;