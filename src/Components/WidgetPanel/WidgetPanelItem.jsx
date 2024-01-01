import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../WidgetTypes';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');


function WidgetPanelItem({ widget, index }) {


  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WIDGET_PANEL_ITEM,
    item: (monitor) => ({
      id: uuidv4(),
      parentID: "",
      order: 0,
      name: widget?.name,
      component: widget?.component,
      props: widget?.props,
      type: ItemTypes.WIDGET_PANEL_ITEM,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      draggedItem: monitor.getItem(),
    })
  }))


  return (
    <div
      key={index}
      className='widget-panel__item'
      ref={drag}
    >
      <div className='widget-panel_item-container'>
        <img src={widget?.cover} />
        <div className='widget-panel_item-description'>
          <div className='widget-panel_label'>{widget?.name}</div>
          <div className='widget-panel_sublabel'>{widget?.description}</div>
        </div>
      </div>
    </div>
  )
}

export default WidgetPanelItem;