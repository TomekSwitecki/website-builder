import React, { useState } from 'react';

function ColorSelect({ label, disabled, value, onChange }) {

    return (
        <div className={"color__input-container"}>
            <label className='color__input'>
                <input type="color" value={value} onChange={onChange} disabled={disabled} />
                {label}
            </label>
        </div>

    )
}

export default ColorSelect;
