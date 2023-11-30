import React, { useState } from 'react';
import { CANVAS_CN } from "../Canvas/const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
import { v4 as uuidv4 } from 'uuid';
import { useWidgetContext } from '../ContextProviders/WidgetProvider';
const uuid = require('uuid');

function Canvas({ children }) {
  const { selectWidget, selectedWidget } = useWidgetContext();

  const [widgets, setWidgets] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGET_PANEL_ITEM,
    hover: (item) => {
      // console.log("enter");
    },
    drop: (item) => {
      const newItem = { ...item, id: uuidv4() };
      setWidgets(prevWidgets => [...prevWidgets, newItem]);
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
          <React.Fragment key={index}>
            {React.cloneElement(widget.component, {
              id: widget.id,
              value: "test",
              onClick: () => handleWidgetClick(widget),
              isSelected: widget == selectedWidget,
            })}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div id="designer-canvas" className={CANVAS_CN} ref={drop}>
      {widgetFactory(widgets)}
    </div>
  );
}

export default Canvas;