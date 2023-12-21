import React, { useState, useEffect, useRef } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../../WidgetTypes';




function WidgetContainer({ id, parentID, children, widget }) {
    const { selectWidget, selectedWidget, setPointedWidget, pointedWidget, setDragHandler } = useWidgetContext();
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
        item: widget,
        onDrag: () => {
            console.log(widget)
            setDragHandler(widget)
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            draggedItem: monitor.getItem(),
        })

    }), [selectedWidget])

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
        console.log(widget.props.width)
    }


    const widgetContainerClass = BEMBuilder('widget__container', widgetStates);
    let inlineWidth = "";
    let inlineMaxWidth = "";
    let inlineMinWidth = "";

    if (widget.name === "FlexContainer") {
        inlineWidth = widget.props.width;
        if (widget.props.width === "fill") {
            inlineWidth = "100%"
        }
        else if (widget.props.width === "hug") {
            inlineWidth = "fit-content"
        } else if (widget.props.width === "fixed") {
            inlineMaxWidth = widget.props.maxWidth + "px";
            inlineMinWidth = widget.props.minWidth + "px";
            inlineWidth = widget.props.setWidth + "px";
        }
    }
    else {
        inlineWidth = "fit-content";
    }

    return (
        <div style={{ width: inlineWidth, maxWidth: inlineMaxWidth, minWidth: inlineMinWidth, transform: `rotate(${widget.props.rotation}deg)` }} data-type={widget.name} ref={drag} id={id} className={widgetContainerClass} onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {children}
        </div>
    );
}

export default WidgetContainer;