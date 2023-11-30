const classBuilder = (widgetName, options) => {
    const { size, color, shape, append, type, selected } = options || {};


    const classes = [
        widgetName,
        size ? `${widgetName}--${size}` : '',
        color ? `${widgetName}--${color}` : '',
        shape ? `${widgetName}--${shape}` : '',
        append ? `${widgetName}--appended` : '',
        selected ? `${widgetName}--selected` : '',
    ];

    const widgetClass = classes.filter(Boolean).join(' ');

    return widgetClass;
}

export default classBuilder;