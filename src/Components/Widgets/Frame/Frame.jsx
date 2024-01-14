import React, { useEffect } from "react";
import { prepareIframe } from "../../../Utils/prepareIframe";
function Frame({ props }) {

  useEffect(() => {
    prepareIframe(JSON.stringify(props.url.value))
  }, [props.url.value])

  return (
    <div className="frame__container">
      {prepareIframe(props.url.value)}
    </div>
  );
}

export default Frame;
