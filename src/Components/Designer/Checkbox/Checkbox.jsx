import React, { useState } from 'react';

function Checkbox({ primary, label, disabled, checked, onChange }) {


    const containerClassName = `checkbox__input-container${primary ? ' checkbox__input-container--primary' : ''}${disabled ? ' checkbox__input-container--disabled' : ''}`;

    return (
        <div className={containerClassName}>
            <label className='checkbox__input'>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
