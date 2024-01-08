import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
import { useWidgetContext } from '../ContextProviders/WidgetProvider';

function WidgetPanelItem({ widget, index }) {

  const { setDragHandler } = useWidgetContext();

  const handleDrag = (e) => {
    e.dataTransfer.setData('text/plain', '');
    const createdItem =
    {
      id: uuidv4(),
      parentID: "",
      order: 0,
      name: widget?.name,
      component: widget?.component,
      props: widget?.props,
    }
    setDragHandler(createdItem);
  }

  return (
    <div
      draggable
      key={index}
      className='widget-panel__item'
      onDragStart={(e) => handleDrag(e)}
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