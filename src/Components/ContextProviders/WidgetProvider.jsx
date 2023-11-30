import React, { createContext, useContext, useState } from 'react';

const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    const [selectedWidget, setSelectedWidget] = useState(null);

    const selectWidget = (widgetId) => {
        setSelectedWidget(widgetId);
    };

    const clearSelectedWidget = () => {
        setSelectedWidget(null);
    };


    return (
        <WidgetContext.Provider value={{ selectedWidget, selectWidget, clearSelectedWidget }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
