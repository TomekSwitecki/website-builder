import React, { useState, useEffect } from 'react';
import { CANVAS_CN } from "./const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
import WidgetContainer from './WidgetContainer/WidgetContainer';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
import { useWidgetContext } from '../ContextProviders/WidgetProvider';


function Canvas() {
  const { addWidget, canvasWidgets, widgetFactory } = useWidgetContext();
  const [innerWidgets, setInnerWidgets] = useState<[]>([]);


  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: [ItemTypes.WIDGET_PANEL_ITEM, ItemTypes.WIDGET_CANVAS_ITEM],
    drop: (item: any, monitor) => {
      if (monitor.didDrop()) {
        return
      }
      if (item.type === ItemTypes.WIDGET_PANEL_ITEM) {
        const newItem = { ...item, id: uuidv4(), parentID: "", type: ItemTypes.WIDGET_CANVAS_ITEM };
        addWidget(newItem);
      }
      else if (item.type === ItemTypes.WIDGET_CANVAS_ITEM) {
        const updatedItem = { ...item, parentID: "" };
        addWidget(updatedItem);
      }

    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }),)


  useEffect(() => {
    setInnerWidgets(canvasWidgets.filter((widget: any) => widget.parentID == ""));
  }, [canvasWidgets]);

  return (
    <div id="designer-canvas" className={CANVAS_CN} ref={drop}>
      {widgetFactory(innerWidgets)}
    </div>
  );
}

export default Canvas;