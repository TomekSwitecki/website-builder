import React, { useRef, useEffect, useState } from "react";

function Photo({ props }) {
  return (
    <img className="photo" src={props.url}></img>
  )
}

export default Photo;