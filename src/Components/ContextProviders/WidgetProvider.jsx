import React, { createContext, useContext, useState } from 'react';
import WidgetContainer from '../Canvas/WidgetContainer/WidgetContainer';
const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    const [canvasWidgets, setCanvasWidgets] = useState([]);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [pointedWidget, setPointedWidget] = useState(null);

    const selectWidget = (widgetId) => {
        setSelectedWidget(widgetId);
    };

    const clearSelectedWidget = () => {
        setSelectedWidget(null);
    };

    function updateWidget(selectedWidget, modifiedProps) {
        console.log(selectedWidget)
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



    const widgetFactory = (widgets) => {
        return (
            <>
                {widgets.map((widget, index) => (
                    <WidgetContainer id={widget.id} key={index} onClick={() => selectWidget(widget)}>
                        {React.cloneElement(widget.component, {
                            id: widget.id,
                            props: widget.props,
                        })}
                    </WidgetContainer>
                ))}
            </>
        );
    };
    return (
        <WidgetContext.Provider value={{ selectedWidget, selectWidget, canvasWidgets, clearSelectedWidget, addWidget, removeWidget, updateWidget, pointedWidget, setPointedWidget, widgetFactory }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
