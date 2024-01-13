import React, { useRef, useEffect } from 'react';
import Image from '../Image/Image';

const Carousel = ({ props }) => {

    const props_ = {
        url: { value: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        background_size: props.background_size
    }

    const animationVariant = props.reverseAnimDirection ? "slideAnimation" : "slideAnimationReversed";

    const slideAnimation = `${animationVariant} ${props.speed.value}s linear infinite`;

    const generatedStyles = {
        animation: slideAnimation,
        gap: props.gap.value + props.gap.unit,
    };

    const urlArray = props.url.value.split(/[ \n,]+/);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-content" style={generatedStyles}>
                {urlArray.map((url, index) => (
                    <Image key={index} props={{ ...props_, url: { value: url } }} />
                ))}

            </div>
        </div>
    );
};

export default Carousel;
