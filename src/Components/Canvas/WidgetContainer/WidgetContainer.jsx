import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';
import { DndProvider, useDrag, useDrop, DragSource, DragPreviewImage } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../../WidgetTypes';
import { XmarkCircle, ArrowLeftCircle, ArrowRightCircle } from '@vectopus/atlas-icons-react';
import Button, { ButtonColor, ButtonShape, ButtonType, ButtonSize } from '../../Designer/Button/Button';


function WidgetContainer({ id, parentID, order, children, widget }) {
    const { canvasWidgets, selectWidget, selectedWidget, setPointedWidget, pointedWidget, setDragHandler, removeWidget, handleReorder, } = useWidgetContext();
    const [widgetStates, setWidgetStates] = useState([]);

    const handleWidgetStates = (widgetCondition, stateValue) => {
        setWidgetStates((prevStates) => {
            if (widgetCondition) {
                if (!prevStates.includes(stateValue)) {
                    return [...prevStates, stateValue];
                }
            } else {
                return prevStates.filter((state) => state !== stateValue);
            }
            return prevStates; // No change
        });
    };

    useEffect(() => {
        handleWidgetStates(selectedWidget && selectedWidget.id === id, "selected");
    }, [selectedWidget]);

    useEffect(() => {
        handleWidgetStates(pointedWidget && pointedWidget === id, "pointed");
    }, [pointedWidget]);
    useEffect(() => {
        let newStates = [];

        if (widget.name === "Container") {
            newStates = ["flexWrapping"];
        } else if (widget.name === "Link") {
            newStates = ["linkWrapping"];
        }
        setWidgetStates(newStates);
    }, [widget.name]);


    const [{ isDragging }, drag] = useDrag(useMemo(() => ({
        type: ItemTypes.WIDGET_CANVAS_ITEM,
        item: widget,
        canDrag: () => widget.type === ItemTypes.WIDGET_CANVAS_ITEM,
        onDrag: () => {
            console.log(e);
            console.log(widget);
            setDragHandler(widget);
            selectWidget(widget);
            e.dataTransfer.setDragImage(new Image(), 0, 0);
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            draggedItem: monitor.getItem(),
        }),
    }), [widget]));




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
    console.log(widget.props)
    if (widget.name === "Container" || widget.name === "Link") {
        inlineWidth = widget.props.width;
        if (widget.props.width === "fill") {
            inlineWidth = "100%"
        }
        else if (widget.props.width === "hug") {
            inlineWidth = "fit-content"
        } else if (widget.props.width === "fixed") {
            // inlineMaxWidth = widget.props.maxWidth + "px";
            // inlineMinWidth = widget.props.minWidth + "px";
            inlineWidth = widget.props.setWidth?.value + widget.props.setWidth?.unit;
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
                    text={<XmarkCircle size={24} />}
                    onClick={(e) => handleWidgetDelete(e)}
                />
            </div>)
    }

    const generatedStyles = {
        width: inlineWidth,
        maxWidth: inlineMaxWidth,
        minWidth: inlineMinWidth,
        transform: `rotate(${widget.props.rotation?.value}deg)`
    };

    return (
        <div style={generatedStyles} data-type={widget.name} ref={drag} id={id} className={widgetContainerClass} onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {(selectedWidget && selectedWidget.id === id && selectedWidget.type != ItemTypes.WIDGET_LINK_ITEM) &&
                <ActionButtons />
            }
            {children}
        </div>
    );
}

export default WidgetContainer;