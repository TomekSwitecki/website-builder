import React from 'react';

const TextInput = ({ id, label, required, placeholder, value, onChange, validationInfo, textArea, unit, isInvalid }) => {
    const inputElement = textArea ? (
        <textarea
            id={id}
            className={`text__input text__input--textarea`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    ) : (
        <div className='text__input-wrapper'>
            <input
                type="text"
                id={id}
                className={`text__input`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
            {unit && <span className="text__unit">{unit}</span>}
        </div>
    );

    return (
        <div className={`text__input-container ${isInvalid ? 'text__input-container--invalid' : ''}`}>
            <div className='label__container'>
                <label htmlFor={id} className="input__label">
                    {label}
                </label>
                {required && (
                    <label htmlFor={id} className="input__label--required">
                        (`field_required`)
                    </label>
                )}
            </div>
            {inputElement}
            {isInvalid && (
                <div className="text__input-validation-info">
                    {validationInfo}
                </div>
            )}
        </div>
    );
};

export default TextInput;




