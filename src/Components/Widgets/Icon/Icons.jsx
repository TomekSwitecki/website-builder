import React from 'react';
import { sanitizeSvg } from '../../../Utils/sanitizeSvg';
function Icon({ props }) {

    const generatedStyles = {
        stroke: props.transparent_stroke ? "transparent" : props.stroke_color,
        fill: props.transparent_fill ? "transparent" : props.fill_color,
        strokeWidth: props.stroke_width.value + props.stroke_width.unit,
        width: props.size.value + props.size.unit,
        height: props.size.value + props.size.unit
    };

    if (props.svg) {
        const sanitizedSvg = sanitizeSvg(props.svg.value);
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
