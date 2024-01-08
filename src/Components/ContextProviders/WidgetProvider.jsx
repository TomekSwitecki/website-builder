import React, { createContext, useContext, useEffect, useState } from 'react';
import WidgetContainer from '../Canvas/WidgetContainer/WidgetContainer';
const WidgetContext = createContext();
import { widgets_library } from '../../WidgetLibrary';
import { v4 as uuidv4 } from 'uuid';


export const WidgetProvider = ({ children }) => {
    const uuid = require('uuid');
    const [canvasWidgets, setCanvasWidgets] = useState([]);
    const [renderedCanvasWidgets, setRenderedCanvasWidgets] = useState([]);
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [pointedWidget, setPointedWidget] = useState(null);
    const [draggedWidget, setDraggedWidget] = useState(null);

    const selectWidget = (widgetId) => {
        setSelectedWidget(widgetId);
        console.log(widgetId)
    };

    const clearSelectedWidget = () => {
        setSelectedWidget(null);
    };


    function setDragHandler(widget) {
        console.log(widget)
        setDraggedWidget(widget);
    }
    function clearDragHandle() {
        setSelectedWidget(null)
        setDraggedWidget(null);
    }


    function updateWidget(selectedWidgetID, modifiedProps) {
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
        console.log(item)
        setCanvasWidgets((prevItems) => {
            const updatedItems = prevItems.filter((prevItem => prevItem.id !== item.id));
            return [...updatedItems];
        });

        clearSelectedWidget();
    };


    const filterDuplicates = (widgets) => {
        if (!Array.isArray(widgets)) {
            // If widgets is not an array, return an empty array or handle it as appropriate.
            return [];
        }

        const uniqueIDs = new Set();
        return widgets.filter((widget) => {
            if (uniqueIDs.has(widget.id)) {
                return false;
            }
            uniqueIDs.add(widget.id);
            return true;
        });
    };



    const sortWidgets = (a, b) => a.order > b.order ? 1 : -1;
    const widgetFactory = (widgets) => {
        const filteredUniqueWidgets = filterDuplicates(widgets);
        return (
            <>
                {filteredUniqueWidgets
                    .sort(sortWidgets)
                    .map((widget, index) => (
                        <WidgetContainer order={widget.order} id={widget.id} key={index} widget={widget}>
                            {React.cloneElement(widget.component, {
                                id: widget.id,
                                props: widget.props,
                                order: index
                            })}
                        </WidgetContainer>
                    ))}
            </>
        );
    };



    const handleReorder = (widget, direction) => {
        const canvasReorder = !widget.parentID;
        if (canvasReorder) {
            console.log(renderedCanvasWidgets);
            setCanvasWidgets((prevWidgets) => {
                return reorderWidgets(renderedCanvasWidgets, widget, direction);
            });
        } else {
            const scopedInnerWidgets = canvasWidgets.find((scopedContainer) => {
                return (
                    scopedContainer.props.innerWidgets &&
                    scopedContainer.props.innerWidgets.some((innerWidget) => innerWidget.id === widget.id)
                );
            });
            console.log(scopedInnerWidgets);
            setCanvasWidgets((prevWidgets) => {
                return reorderWidgets(scopedInnerWidgets.props.innerWidgets, widget, direction);
            });

        }
    };

    const reorderWidgets = (widgetsArray, selectedWidget, direction) => {
        if (widgetsArray.length > 0) {
            const selectedWidgetIndex = widgetsArray.findIndex((widget) => widget.id === selectedWidget.id);
            let updatedWidgets;

            // Calculate the target index based on the direction
            const targetIndex = direction === 'before' ? selectedWidgetIndex - 1 : selectedWidgetIndex + 1;

            // Ensure the target index is within bounds
            const clampedTargetIndex = Math.max(0, Math.min(targetIndex, widgetsArray.length));

            // Splice the array to reorder widgets
            updatedWidgets = widgetsArray;

            const [removedWidget] = updatedWidgets.splice(selectedWidgetIndex, 1);
            console.log(removedWidget)
            if (direction === 'before' || direction === 'after') {
                updatedWidgets.splice(clampedTargetIndex, 0, removedWidget);
            }
            else if (direction === 'delete') {
                removeWidget(removedWidget)
            }

            // Update the order numbers
            updatedWidgets.forEach((widget, index) => {
                widget.order = index;
            });

            console.log(removedWidget)
            canvasWidgets.forEach((canvasWidget) => {
                const isDuplicate = updatedWidgets.some((widget) => widget.id === canvasWidget.id || canvasWidget.id === removedWidget.id);
                if (!isDuplicate) {
                    updatedWidgets.push(canvasWidget);
                }
            });
            console.log(updatedWidgets)
            return updatedWidgets;
        }

        // Return the original widgets if the array is empty
        return widgetsArray;
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
        //console.log(pointedWidgetContainer)
        if (pointedWidgetContainer) {
            const dataObject = { id: pointedWidgetContainer.id, type: pointedWidgetContainer.getAttribute('data-type') };
            setPointedWidget(dataObject);
        }
        else {
            setPointedWidget("");
        }
    }



    // useEffect(() => {
    //     if (pointedWidget)
    //         console.log(pointedWidget);
    // }, [pointedWidget]);

    return (
        <WidgetContext.Provider value={{ renderedCanvasWidgets, mousePointer, setCanvasWidgets, draggedWidget, selectedWidget, selectWidget, canvasWidgets, clearSelectedWidget, addWidget, removeWidget, updateWidget, pointedWidget, setPointedWidget, widgetFactory, setDragHandler, clearDragHandle, handleReorder, setRenderedCanvasWidgets }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
