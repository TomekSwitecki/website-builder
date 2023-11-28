import React, { useState } from 'react';
import { CANVAS_CN } from "../Canvas/const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';

function Canvas({ children }) {
  const [widgets, setWidgets] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGET_PANEL_ITEM,
    drop: (item) => {
      setWidgets(prevWidgets => [...prevWidgets, item]);

      console.log("Dropped item:", item)
      console.log(widgets)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  const widgetFactory = (widgets) => {
    return (
      <>
        {widgets.map((widget, index) => (
          <React.Fragment key={index}>
            {React.cloneElement(widget.component, { key: index })}
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