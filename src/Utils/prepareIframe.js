import React from "react";

export function prepareIframe(iframeElement) {
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