import React, { useState } from 'react';

function Badge({ children }) {

    return (
        <div className={"badge"}>
            {children}
        </div>
    );
}

export default Badge;
