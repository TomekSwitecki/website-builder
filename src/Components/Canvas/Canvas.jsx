import React, { useState } from 'react';
import { CANVAS_CN } from "../Canvas/const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
import WidgetContainer from './WidgetContainer/WidgetContainer';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
import { useWidgetContext } from '../ContextProviders/WidgetProvider';


function Canvas({ children }) {
  const { selectWidget, addWidget, canvasWidgets } = useWidgetContext();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGET_PANEL_ITEM,
    drop: (item) => {
      const newItem = { ...item, id: uuidv4() };
      addWidget(newItem);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  const handleWidgetClick = (widget) => {
    console.log(widget.component.props)
    selectWidget(widget);
  };


  const widgetFactory = (widgets) => {
    return (
      <>
        {widgets.map((widget, index) => (
          <WidgetContainer id={widget.id} key={index}>
            {React.cloneElement(widget.component, {
              id: widget.id,
              onClick: () => handleWidgetClick(widget),
              props: widget.props,
              value: widget.props.value
            })}
          </WidgetContainer>
        ))}
      </>
    );
  };

  return (
    <div id="designer-canvas" className={CANVAS_CN} ref={drop}>
      {widgetFactory(canvasWidgets)}
    </div>
  );
}

export default Canvas;