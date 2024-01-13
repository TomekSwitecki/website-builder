import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';

import { XmarkCircle, ArrowLeftCircle, ArrowRightCircle } from '@vectopus/atlas-icons-react';
import Button, { ButtonColor, ButtonShape, ButtonType, ButtonSize } from '../../Designer/Button/Button';
import Badge from '../../Designer/Badge/Badge';


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
    }, [selectedWidget, widget.order, canvasWidgets, pointedWidget]);

    useEffect(() => {
        handleWidgetStates(pointedWidget && pointedWidget === id, "pointed");
    }, [pointedWidget, widget.order]);
    useEffect(() => {
        let newStates = [];

        if (widget.name === "Container") {
            newStates = ["flexWrapping"];
        } else if (widget.name === "Link") {
            newStates = ["linkWrapping"];
        }
        setWidgetStates(newStates);
    }, [widget.name, widget.order]);



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
        //removeWidget(widget);
    }


    const widgetContainerClass = BEMBuilder('widget__container', widgetStates);

    let inlineWidth = "";
    let inlineHeight = "";
    let inlineMaxWidth = "";
    let inlineMinWidth = "";

    if (widget.name === "Container" || widget.name === "Link") {
        inlineWidth = widget.props.width_type;
        inlineHeight = widget.props.height_type

        if (widget.props.height_type === "fill") {
            inlineHeight = "100%"
        }
        else if (widget.props.height_type === "hug") {
            inlineHeight = "fit-content"
        } else if (widget.props.height_type === "fixed") {
            inlineHeight = widget.props.height?.value + widget.props.height?.unit;
        }

        if (widget.props.width_type === "fill") {
            inlineWidth = "100%"
        }
        else if (widget.props.width_type === "hug") {
            inlineWidth = "fit-content"
        } else if (widget.props.width_type === "fixed") {
            // inlineMaxWidth = widget.props.maxWidth + "px";
            // inlineMinWidth = widget.props.minWidth + "px";
            inlineWidth = widget.props.width?.value + widget.props.width?.unit;
        }
    }
    else if (widget.name === "Photo Carousel") {
        inlineHeight = "100%";
        inlineWidth = "100%";
    }
    else if (widget.name === "Frame" || widget.name === "Divider") {
        inlineWidth = "100%";
    }
    else if (widget.name === "Frame" || widget.name === "Image" || widget.name === "Video") {
        inlineHeight = "100%"
    }
    else {
        // inlineMaxWidth = "100%";
        inlineWidth = "fit-content";
    }


    const ActionButtons = () => {
        return (
            <div className='widget__container-action-buttons'>
                <Badge>{order}</Badge>
                <div className='widget__container-inner'>
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
                </div>
            </div >)
    }

    const generatedStyles = {
        width: inlineWidth,
        height: inlineHeight,
        maxWidth: inlineMaxWidth,
        minWidth: inlineMinWidth,
        transform: `rotate(${widget.props.rotation?.value}deg)`
    };

    const handleDrag = (e) => {
        e.stopPropagation();
        e.dataTransfer.setData('text/plain', '');
        setDragHandler(widget);
    }

    return (
        <div draggable="true" style={generatedStyles} data-type={widget.name} id={id} className={widgetContainerClass} onDragStart={(e) => handleDrag(e)} onClick={handleMouseClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {(selectedWidget && selectedWidget.id === id) &&
                <ActionButtons />
            }
            {children}
        </div >
    );
}

export default WidgetContainer;