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
    const { addWidget, canvasWidgets, widgetFactory } = useWidgetContext();
    const [innerWidgets, setInnerWidgets] = useState<[]>([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.WIDGET_PANEL_ITEM,
        drop: (item: any) => {

            const newItem = { ...item, id: uuidv4(), parentId: id };
            addWidget(newItem);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [])




    useEffect(() => {
        setInnerWidgets(canvasWidgets.filter((widget: any) => widget.parentId === id));
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
