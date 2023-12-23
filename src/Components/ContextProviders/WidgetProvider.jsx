import React, { createContext, useContext, useEffect, useState } from 'react';
import WidgetContainer from '../Canvas/WidgetContainer/WidgetContainer';
const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    const [canvasWidgets, setCanvasWidgets] = useState([]);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [pointedWidget, setPointedWidget] = useState(null);
    const [draggedWidget, setDraggedWidget] = useState(null);

    const selectWidget = (widgetId) => {
        if (pointedWidget) {
            setSelectedWidget(widgetId);
            console.log(widgetId)
        } else {
            setSelectedWidget("")
        }

    };

    const clearSelectedWidget = () => {
        setSelectedWidget(null);
    };


    function setDragHandler(widget) {
        setDraggedWidget(widget);
    }
    function clearDragHandle() {
        setSelectedWidget(null)
        setDraggedWidget(null);
    }


    function updateWidget(selectedWidgetID, modifiedProps) {
        //console.log(selectedWidget)
        setCanvasWidgets((canvasWidgets) =>
            canvasWidgets.map((widget) =>
                widget.id === selectedWidgetID ? { ...widget, props: { ...widget.props, ...modifiedProps } } : widget
            )
        );
    }

    const addWidget = (widget) => {
        setCanvasWidgets((prevWidgets) => [...prevWidgets, widget]);
    };

    const removeWidget = (item) => {
        // setCanvasWidgets((prevWidgets) =>
        //     prevWidgets.filter((widget) => widget.id !== widgetId)
        // );
        setCanvasWidgets((prevItems) => {
            const updatedItems = prevItems.filter((prevItem => prevItem.id !== item.id));
            return [...updatedItems];
        });
    };


    const filterDuplicates = (widgets) => {
        const uniqueIDs = new Set();
        return widgets.filter((widget) => {
            if (uniqueIDs.has(widget.id)) {
                return false;
            }
            uniqueIDs.add(widget.id);
            return true;
        });
    };

    const widgetFactory = (widgets) => {
        const filteredUniqueWidgets = filterDuplicates(widgets);
        return (
            <>
                {filteredUniqueWidgets.map((widget, index) => (
                    <WidgetContainer id={widget.id} key={index} widget={widget}>
                        {React.cloneElement(widget.component, {
                            id: widget.id,
                            props: widget.props,
                        })}
                    </WidgetContainer>
                ))}
            </>
        );
    };



    function getRootElement(element) {
        let pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        let parent = element;
        while (parent && (!parent.id || (parent.id && !pattern.test(parent.id)))) {
            parent = parent.parentElement;
        }
        //console.log(parent)
        return parent;
    }

    function mousePointer(e) {
        e.stopPropagation();
        e.preventDefault();

        let pointedWidgetContainer = getRootElement(e.target);
        console.log(pointedWidgetContainer)
        if (pointedWidgetContainer) {
            const dataObject = { id: pointedWidgetContainer.id, type: pointedWidgetContainer.getAttribute('data-type') };
            setPointedWidget(dataObject);
        }
        else {
            setPointedWidget("");
        }
    }



    useEffect(() => {
        if (pointedWidget)
            console.log(pointedWidget);
    }, [pointedWidget]);

    return (
        <WidgetContext.Provider value={{ mousePointer, setCanvasWidgets, draggedWidget, selectedWidget, selectWidget, canvasWidgets, clearSelectedWidget, addWidget, removeWidget, updateWidget, pointedWidget, setPointedWidget, widgetFactory, setDragHandler, clearDragHandle }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
