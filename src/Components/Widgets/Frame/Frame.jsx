import React, { useEffect } from "react";

function Frame({ props }) {
  function prepareIframe(iframeElement) {
    if (iframeElement) {
      console.log(iframeElement)
      const match = iframeElement.match(/src="(.*?)"/);
      const srcAttributeValue = match ? match[1] : null;

      console.log(srcAttributeValue);

      return <iframe src={srcAttributeValue}></iframe>;
    } else {
      return (
        <div className="frame__placeholder" />
      );
    }
  }


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
