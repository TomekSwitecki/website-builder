import React, { useState, useEffect } from 'react';
import { CANVAS_CN } from "./const";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../WidgetTypes';
import WidgetContainer from './WidgetContainer/WidgetContainer';
import { Helmet } from 'react-helmet';
import { useWidgetContext } from '../ContextProviders/WidgetProvider';
import { useCanvasContext } from '../ContextProviders/CanvasProvider';


function Canvas() {
  const { handleReorder, addWidget, canvasWidgets, widgetFactory, removeWidget, mousePointer, pointedWidget, clearDragHandle, setRenderedCanvasWidgets, orderRecalculation } = useWidgetContext();
  const [innerWidgets, setInnerWidgets] = useState([]);
  const { canvasFont, googleFontsUrl, canvasBgColor, backgroundImageUrl } = useCanvasContext();


  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: [ItemTypes.WIDGET_PANEL_ITEM, ItemTypes.WIDGET_CANVAS_ITEM],
    drop: (item, monitor) => {
      if (monitor.didDrop()) {
        return
      }



      let pointedWidgetFull = {};
      const droppedOnItself = item.id == pointedWidget.id;
      const invalidDrop = pointedWidget.type !== "Container" && pointedWidget.id;

      let isPointedWidgetInside = false;

      if (pointedWidget && item.name === "Container") {
        pointedWidgetFull = canvasWidgets.find(obj => obj.id === pointedWidget.id);

        if (pointedWidgetFull) {
          console.log(pointedWidgetFull);
          isPointedWidgetInside = item.props.recursiveInnerWidgets && item.props.recursiveInnerWidgets.some(widget => widget.id === pointedWidgetFull.id);
          console.log(isPointedWidgetInside);
        }
      }


      if (!droppedOnItself && !invalidDrop && !isPointedWidgetInside) {
        if (!pointedWidget) {
          if (item.type === ItemTypes.WIDGET_PANEL_ITEM) {
            removeWidget(item);
            const newItem = { ...item, parentID: "", type: ItemTypes.WIDGET_CANVAS_ITEM, order: innerWidgets.length };
            orderRecalculation(innerWidgets);
            addWidget(newItem);
          }
          else if (item.type === ItemTypes.WIDGET_CANVAS_ITEM) {
            removeWidget(item);
            const updatedItem = { ...item, parentID: "", order: innerWidgets.length - 1 };
            orderRecalculation(innerWidgets);
            addWidget(updatedItem);
          }
        }
        else {
          removeWidget(item);
          const updatedItem = { ...item, parentID: pointedWidget.id, order: 0 };
          addWidget(updatedItem);

        }
      }
      clearDragHandle();
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }), [pointedWidget, canvasWidgets])


  useEffect(() => {
    setInnerWidgets(canvasWidgets.filter((widget) => widget.parentID == ""));
    setRenderedCanvasWidgets(innerWidgets);
  }, [canvasWidgets, innerWidgets.length]);




  useEffect(() => {
    console.log(backgroundImageUrl)
  }, [backgroundImageUrl]);

  return (
    <div style={{ fontFamily: canvasFont, background: canvasBgColor + " url(" + backgroundImageUrl + ")" }} ref={drop} id="designer-canvas" className={CANVAS_CN} onDragOver={(e) => mousePointer(e)} onMouseOver={(e) => mousePointer(e)}  >
      <Helmet>
        {googleFontsUrl !== '' && (
          <link rel="stylesheet" type="text/css" href={googleFontsUrl} />
        )}
      </Helmet>

      {widgetFactory(innerWidgets)}
    </div>
  );
}

export default Canvas;