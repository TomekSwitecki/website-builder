import React from 'react';

const Heading = ({ level, text }) => {
    const HeadingTag = `h${level}`;

    return (
        <HeadingTag className={"heading"}>{text}</HeadingTag>
    );
};

export default Heading;
