import React, { useState, useEffect, useRef } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';
import { DndProvider, useDrag, useDrop, DragSource, DragPreviewImage } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../../WidgetTypes';
import { Trash, ArrowLeftCircle, ArrowRightCircle } from '@vectopus/atlas-icons-react';
import Button, { ButtonColor, ButtonShape, ButtonType, ButtonSize } from '../../Designer/Button/Button';


function WidgetContainer({ id, parentID, order, children, widget }) {
    const { canvasWidgets, selectWidget, selectedWidget, setPointedWidget, pointedWidget, setDragHandler, removeWidget, handleReorder, } = useWidgetContext();
    const [widgetStates, setWidgetStates] = useState([]);

    const handleWidgetStates = (widgetCondition, stateValue) => {
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
        handleWidgetStates(selectedWidget && selectedWidget.id === id, "selected");
    }, [selectedWidget]);

    useEffect(() => {
        handleWidgetStates(pointedWidget && pointedWidget === id, "pointed");
    }, [pointedWidget]);

    useEffect(() => {
        handleWidgetStates(widget.name === "Container", "flexWrapping");
    }, [canvasWidgets]);



    const [{ isDragging }, drag] = useDrag((e) => ({
        type: ItemTypes.WIDGET_CANVAS_ITEM,
        item: widget,
        onDrag: () => {
            console.log(e)
            console.log(widget)
            setDragHandler(widget)
            e.dataTransfer.setDragImage(new Image(), 0, 0);
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
    }

    const handleWidgetDelete = (e) => {
        e.stopPropagation();
        handleReorder(widget, "delete");
        removeWidget(widget);
    }


    const widgetContainerClass = BEMBuilder('widget__container', widgetStates);

    let inlineWidth = "";
    let inlineMaxWidth = "";
    let inlineMinWidth = "";

    if (widget.name === "Container") {
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
    else if (widget.name === "Frame" || widget.name === "Divider") {
        inlineWidth = "fill";
    }
    else {
        inlineMaxWidth = "100%";
        inlineWidth = "fit-content";
    }


    const ActionButtons = () => {
        return (
            <div className='widget__container-action-buttons'>
                {order}
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Default}
                    shape={ButtonShape.Rounded}
                    size={ButtonSize.Icon}
                    text={<ArrowLeftCircle size={24} />}
                    onClick={() => handleReorder(widget, 'before')}
                />
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Default}
                    shape={ButtonShape.Rounded}
                    size={ButtonSize.Icon}
                    text={<ArrowRightCircle size={24} />}
                    onClick={() => handleReorder(widget, 'after')}
                />
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Negative}
                    shape={ButtonShape.Rounded}
                    size={ButtonSize.Icon}
                    text={<Trash size={24} />}
                    onClick={(e) => handleWidgetDelete(e)}
                />
            </div>)
    }

    const generatedStyles = {
        width: inlineWidth,
        maxWidth: inlineMaxWidth,
        minWidth: inlineMinWidth,
        transform: `rotate(${widget.props.rotation}deg)`
    };

    return (
        <div style={generatedStyles} data-type={widget.name} ref={drag} id={id} className={widgetContainerClass} onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {(selectedWidget && selectedWidget.id === id) &&
                <ActionButtons />
            }
            {children}
        </div>
    );
}

export default WidgetContainer;