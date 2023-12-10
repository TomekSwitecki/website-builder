import React, { useState, useEffect } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../../WidgetTypes';

function WidgetContainer({ id, children, widget }) {
    const { selectWidget, selectedWidget, setPointedWidget, pointedWidget } = useWidgetContext();
    const [widgetStates, setWidgetStates] = useState([]);

    const handleWidgetStates = (widgetCondition, stateValue, widgetStates, setWidgetStates) => {
        if (widgetCondition) {
            if (!widgetStates.includes(stateValue)) {
                setWidgetStates((prevStates) => [...prevStates, stateValue]);
            }
        } else {
            const newWidgetStatesArray = widgetStates.filter((state) => state !== stateValue);
            setWidgetStates(newWidgetStatesArray);
        }
    };

    useEffect(() => {
        handleWidgetStates(selectedWidget && selectedWidget.id === id, "selected", widgetStates, setWidgetStates);
    }, [selectedWidget]);

    useEffect(() => {
        handleWidgetStates(pointedWidget && pointedWidget === id, "pointed", widgetStates, setWidgetStates);
    }, [pointedWidget]);


    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.WIDGET_CANVAS_ITEM,
        item: { widget },

        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            draggedItem: monitor.getItem(),
        })
    }))

    const handleMouseOver = (e) => {
        e.stopPropagation();
        setPointedWidget(id)
    }

    const handleMouseOut = (e) => {
        e.stopPropagation();
        setPointedWidget(null)
    }

    const handleMouseClick = (e) => {
        e.stopPropagation();
        selectWidget(widget)
    }

    const widgetContainerClass = BEMBuilder('widget__container', widgetStates);


    return (
        <div ref={drag} id={id} className={widgetContainerClass} onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {children}
        </div>
    );
}

export default WidgetContainer;