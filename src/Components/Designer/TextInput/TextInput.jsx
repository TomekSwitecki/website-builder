import React from 'react';

const TextInput = ({ id, label, required, placeholder, value, onChange, validationInfo, textArea }) => {
    const inputElement = textArea ? (
        <textarea
            id={id}
            className={`text__input text__input--textarea`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    ) : (
        <input
            type="text"
            id={id}
            className={`text__input`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );

    return (
        <div className={`text__input-container ${validationInfo ? 'text__input-container--invalid' : ''}`}>
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
            {validationInfo && (
                <div className="text__input-validation-info">
                    {validationInfo}
                </div>
            )}
        </div>
    );
};

export default TextInput;
