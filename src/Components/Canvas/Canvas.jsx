import React from 'react';
import { CANVAS_CN } from "../Canvas/const";

import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
function Canvas({ children }) {


  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WIDGET_PANEL_ITEM,
    drop: (item) => console.log("Dropped item:", item),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [])

  return (
    <div id="designer-canvas" className={CANVAS_CN} ref={drop}>
      {children}
    </div>
  );
}

export default Canvas;