import React, { useState } from 'react';
import { CANVAS_CN } from "../Canvas/const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
import WidgetContainer from './WidgetContainer/WidgetContainer';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
import { useWidgetContext } from '../ContextProviders/WidgetProvider';


function Canvas({ children }) {
  const { addWidget, canvasWidgets, widgetFactory } = useWidgetContext();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGET_PANEL_ITEM,
    drop: (item) => {
      const newItem = { ...item, id: uuidv4(), parentId: "" };
      addWidget(newItem);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])



  return (
    <div id="designer-canvas" className={CANVAS_CN} ref={drop}>
      {widgetFactory(canvasWidgets)}
    </div>
  );
}

export default Canvas;