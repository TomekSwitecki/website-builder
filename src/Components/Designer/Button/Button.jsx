import React from "react";
import { Link } from "react-router-dom";

export const ButtonType = {
    Filled: "filled",
    Outlined: "outlined",
    Ghost: "ghost",
};

export const ButtonShape = {
    Pill: "pill",
    Rounded: "rounded",
};

export const ButtonSize = {
    Default: "default",
    Compact: "compact",
    Icon: "icon"
};

export const ButtonColor = {
    Default: "default",
    Primary: "primary",
    Secondary: "secondary",
    Negative: "negative"
};

function Button(props) {
    const { id, type, size, color, shape, text, append, onClick, submit, disabled, linkTo } = props;

    const sizeClass = size ? `button--${size}` : '';
    const colorClass = color ? `button--${color}` : '';
    const shapeClass = shape ? `button--${shape}` : "";
    const appendedClass = append ? 'button__appended' : '';

    const buttonClass = `button button--${type} ${sizeClass} ${colorClass} ${appendedClass} ${shapeClass}`;

    if (!linkTo) {
        return (
            <button id={id} className={buttonClass} onClick={onClick} type={submit ? "submit" : "button"} disabled={disabled}>
                <div className="button__text">{text}</div>
                {/* <div className="button__append">{append}</div> */}
            </button>
        );
    }
    else {
        return (
            <Link to={linkTo} id={id} className={buttonClass} >
                <div className="button__text">{text}</div>
            </Link>
        )
    }

}

export default Button;
