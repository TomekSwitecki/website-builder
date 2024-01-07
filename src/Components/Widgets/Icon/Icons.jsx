import React from 'react';
import { sanitizeSvg } from '../../../Utils/sanitizeSvg';
function Icon({ props }) {

    const generatedStyles = {
        stroke: props.transparent_stroke ? "transparent" : props.stroke_color,
        fill: props.transparent_fill ? "transparent" : props.fill_color,
        strokeWidth: props.stroke_width + "px",
        width: props.size + "px",
        height: props.size + "px"
    };

    if (props.svg) {
        const sanitizedSvg = sanitizeSvg(props.svg);
        return (
            <div className={"icon"} style={generatedStyles} dangerouslySetInnerHTML={{ __html: sanitizedSvg }} />
        );
    } else {
        return (
            <div className="icon">test</div>
        );
    }
}

export default Icon;
