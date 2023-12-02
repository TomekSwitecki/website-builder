import React, { createContext, useContext, useState } from 'react';

const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    const [canvasWidgets, setCanvasWidgets] = useState([]);
    const [selectedWidget, setSelectedWidget] = useState(null);

    const selectWidget = (widgetId) => {
        setSelectedWidget(widgetId);
    };

    const clearSelectedWidget = () => {
        setSelectedWidget(null);
    };

    function updateWidget(selectedWidget, modifiedProps) {
        console.log(modifiedProps)
        setCanvasWidgets((canvasWidgets) =>
            canvasWidgets.map((widget) =>
                widget.id === selectedWidget.id ? { ...widget, props: { ...widget.props, ...modifiedProps } } : widget
            )
        );
    }

    const addWidget = (widget) => {
        setCanvasWidgets((prevWidgets) => [...prevWidgets, widget]);
    };

    const removeWidget = (widgetId) => {
        setCanvasWidgets((prevWidgets) =>
            prevWidgets.filter((widget) => widget.id !== widgetId)
        );
    };

    return (
        <WidgetContext.Provider value={{ selectedWidget, selectWidget, canvasWidgets, clearSelectedWidget, addWidget, removeWidget, updateWidget }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
