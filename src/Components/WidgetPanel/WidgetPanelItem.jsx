import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../../WidgetTypes';


function WidgetPanelItem({ widget, index }) {


  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WIDGET_PANEL_ITEM,
    item: { name: widget.name, component: widget.component, props: widget.props },
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
      <div className='widget-panel__item-container'>
        <img src={widget.cover} />
        <div className='widget-panel__item-description'>
          <div className='widget-panel__item-name'>{widget.name}</div>
          <div>{widget.description}</div>
        </div>
      </div>
    </div>
  )
}

export default WidgetPanelItem;