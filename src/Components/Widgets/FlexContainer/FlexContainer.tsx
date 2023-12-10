import React, { useEffect, useState, useContext } from "react";
import { useWidgetContext } from "../../ContextProviders/WidgetProvider";
import { useDrop } from 'react-dnd';
import { ItemTypes } from "../../../WidgetTypes";
import { v4 as uuidv4 } from 'uuid';
import classnames from "classnames";
const uuid = require('uuid');
interface FlexContainerProps {
    id?: string
    align?: string,
    direction?: string,
    gap?: string,
    height?: number,
    margin?: number,
    children?: any;
}



function FlexContainer({ id, align = "center", direction = "row", gap = "8", height, margin, children, ...props }: FlexContainerProps) {
    const { addWidget, removeWidget, updateWidget, canvasWidgets, widgetFactory } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState<object[]>([]);



    const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
        accept: [ItemTypes.WIDGET_PANEL_ITEM, ItemTypes.WIDGET_CANVAS_ITEM],
        drop: (item: any, monitor) => {
            if (monitor.didDrop()) {
                return
            }
            console.log(item.widget)
            console.log(innerWidgets)

            if (item.widget.type === ItemTypes.WIDGET_PANEL_ITEM) {
                console.log(item.widget.type)
                const newItem = { ...item, id: uuidv4(), parentID: id, type: ItemTypes.WIDGET_CANVAS_ITEM };
                addWidget(newItem);
            }
            else if (item.widget.type === ItemTypes.WIDGET_CANVAS_ITEM && !innerWidgets.some(innerItem => (innerItem as any).id === item.widget.id)) {
                removeWidget(item.widget.id)
                const updatedItem = { ...item.widget, parentID: id };
                if (!innerWidgets.includes(updatedItem)) {
                    addWidget(updatedItem);
                }
            }

        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }), [canvasWidgets, innerWidgets])


    useEffect(() => {
        setInnerWidgets(canvasWidgets.filter((widget: any) => {
            return widget.parentID === id;
        }));
        console.log(innerWidgets);
    }, [canvasWidgets]);



    return (
        <div
            ref={drop}
            className={classnames(
                "flex_container",
                `align_${align}`,
                `direction_${direction}`,
                `height_${height || "full"}`,
                `gap_${gap}`,
                `margin_${margin || "0"}`
            )}
        >

            {widgetFactory(innerWidgets)}

        </div>
    );
}

export default FlexContainer;
