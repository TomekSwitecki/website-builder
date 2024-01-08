import React, { useState, useEffect } from 'react';
import { CANVAS_CN } from "./const";
import WidgetContainer from './WidgetContainer/WidgetContainer';
import { Helmet } from 'react-helmet';
import { useWidgetContext } from '../ContextProviders/WidgetProvider';
import { useCanvasContext } from '../ContextProviders/CanvasProvider';


function Canvas() {
  const { handleReorder, selectedWidget, renderedCanvasWidgets, addWidget, canvasWidgets, widgetFactory, removeWidget, draggedWidget, updateWidget, mousePointer, pointedWidget, clearDragHandle, setRenderedCanvasWidgets } = useWidgetContext();
  const [innerWidgets, setInnerWidgets] = useState([]);
  const { canvasFont, googleFontsUrl, canvasBgColor, backgroundImageUrl, backgroundImageSize } = useCanvasContext();

  useEffect(() => {
    setInnerWidgets(canvasWidgets.filter((widget) => widget.parentID == ""));
    setRenderedCanvasWidgets(innerWidgets);
  }, [canvasWidgets, innerWidgets.length]);


  const handleDrop = (e) => {
    let pointedWidgetFull = {};
    let isPointedWidgetInside = false;
    const droppedOnItself = draggedWidget.id == pointedWidget.id;


    if (pointedWidget) {
      console.log(pointedWidget)
      if (pointedWidget.type === "Container" || pointedWidget.type === "Link") {
        if (!droppedOnItself && !isPointedWidgetInside) {
          pointedWidgetFull = canvasWidgets.find(obj => obj.id === pointedWidget.id);
          isPointedWidgetInside = draggedWidget.props.recursiveInnerWidgets && draggedWidget.props.recursiveInnerWidgets.some(widget => widget.id === pointedWidgetFull?.id);

          removeWidget(draggedWidget);
          const updatedItem = { ...draggedWidget, parentID: pointedWidget.id, order: pointedWidgetFull.props.innerWidgets.length };
          addWidget(updatedItem);
        }
      }
      else {
        //dropped on some other non-interactable widget
        return
      }
    }
    else if (!pointedWidget) {
      //dropped on canvas - parentID restarted
      removeWidget(draggedWidget);
      const updatedItem = { ...draggedWidget, parentID: "", order: renderedCanvasWidgets.length };
      addWidget(updatedItem)
      clearDragHandle();
    }

  }

  useEffect(() => {
    console.log(backgroundImageUrl)
  }, [backgroundImageUrl]);

  return (
    <div style={{ fontFamily: canvasFont, backgroundSize: backgroundImageSize, background: canvasBgColor + " url(" + backgroundImageUrl + ")" }} id="designer-canvas" className={CANVAS_CN} onDragOver={(e) => mousePointer(e)} onMouseOver={(e) => mousePointer(e)} onDrop={(e) => handleDrop(e)}  >
      <Helmet>
        {googleFontsUrl !== '' && (
          <link rel="stylesheet" type="text/css" href={googleFontsUrl} />
        )}
      </Helmet>

      {widgetFactory(innerWidgets)}
    </div >
  );
}

export default Canvas;