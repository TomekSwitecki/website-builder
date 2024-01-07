import React, { createContext, useContext, useEffect, useState } from 'react';
import WidgetContainer from '../Canvas/WidgetContainer/WidgetContainer';
const WidgetContext = createContext();
import { widgets_library } from '../../WidgetLibrary';
import { v4 as uuidv4 } from 'uuid';
import { ItemTypes } from '../../WidgetTypes';


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
        setSelectedWidget(widget)
        setDraggedWidget(widget);
    }
    function clearDragHandle() {
        setSelectedWidget(null)
        setDraggedWidget(null);
    }


    function updateWidget(selectedWidgetID, modifiedProps) {
        console.log(modifiedProps)
        setCanvasWidgets((canvasWidgets) =>
            canvasWidgets.map((widget) =>
                widget.id === selectedWidgetID ? { ...widget, props: { ...widget.props, ...modifiedProps } } : widget
            )
        );
        console.log(canvasWidgets)
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
                        <WidgetContainer order={index} id={widget.id} key={index} widget={widget}>
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


    const widgetLink = (widget) => {
        console.log(widget)
        if (widget && widget.component) {
            const clonedWidget = (
                <WidgetContainer id={widget.id} widget={widget}>
                    {React.cloneElement(widget.component, {
                        id: widget.id,
                        props: widget.props,
                    })}
                </WidgetContainer>
            );

            // Now that the widget has been cloned, you can safely remove it
            return clonedWidget;
        }
        //removeWidget(widget);
        return null;
    }

    const widgetCreate = (widgetName, parentID, childID) => {
        if (widgetName) {
            const widgetToCreate = widgets_library.find(widget => widget.name === widgetName);
            const generatedID = uuidv4();
            const widgetData = {
                id: childID,
                parentID: parentID,
                order: 0,
                name: widgetToCreate?.name,
                component: widgetToCreate?.component,
                props: widgetToCreate?.props,
                type: ItemTypes.WIDGET_LINK_ITEM,
            }
            const createdWidget = (
                <WidgetContainer id={widgetData.id} widget={widgetData}>
                    {React.cloneElement(widgetData.component, {
                        id: widgetData.id,
                        props: { ...widgetData.props },
                        order: widgetData.order,
                    })}
                </WidgetContainer>
            );

            //setCanvasWidgets((prevWidgets) => [...prevWidgets, widgetData]);
            addWidget(widgetData)
            console.log(createdWidget)
            return createdWidget;


        }
        // return null;
    }

    const handleReorder = (widget, direction) => {

        if (!widget.parentID) {
            console.log(canvasWidgets)
            setCanvasWidgets((prevWidgets) => {
                if (selectedWidget) {
                    const selectedWidgetIndex = prevWidgets.findIndex((widget) => widget.id === selectedWidget.id);

                    if (selectedWidgetIndex !== -1) {

                        if (direction === 'delete') {

                        }

                        // Calculate the target index based on the direction
                        const targetIndex = direction === 'before' ? selectedWidgetIndex - 1 : selectedWidgetIndex + 1;

                        // Ensure the target index is within bounds
                        const clampedTargetIndex = Math.max(0, Math.min(targetIndex, renderedCanvasWidgets.length));

                        // Splice the array to reorder widgets
                        const updatedWidgets = [...prevWidgets];
                        const [removedWidget] = updatedWidgets.splice(selectedWidgetIndex, 1);
                        updatedWidgets.splice(clampedTargetIndex, 0, removedWidget);

                        // Update the order numbers
                        updatedWidgets.forEach((widget, index) => {
                            widget.order = index;
                        });

                        return updatedWidgets;
                    }
                }

                // Return the original widgets if no selected widget
                return prevWidgets;
            });
        }
        else {

        }

    };

    const orderRecalculation = (scope) => {
        scope.forEach((widget, index) => {
            widget.order = index;
        });
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
        <WidgetContext.Provider value={{ widgetLink, widgetCreate, mousePointer, setCanvasWidgets, draggedWidget, selectedWidget, selectWidget, canvasWidgets, clearSelectedWidget, addWidget, removeWidget, updateWidget, pointedWidget, setPointedWidget, widgetFactory, setDragHandler, clearDragHandle, handleReorder, orderRecalculation, setRenderedCanvasWidgets }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    return useContext(WidgetContext);
};
