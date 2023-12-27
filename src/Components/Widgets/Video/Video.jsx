import React, { useRef, useEffect, useState } from "react";

function Video({ props }) {
  return (
    <video className="video" controls={props.controls} autoPlay={props.autoPlay} loop={props.loop}>
      <source src={props.url} type="video/ogg"></source>
    </video>

  )
}

export default Video;