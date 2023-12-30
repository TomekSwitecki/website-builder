import React, { useState, useContext } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from "./Components/Canvas/Canvas";
import WidgetPanel from "./Components/WidgetPanel/WidgetPanel";
import PropertiesPanel from "./Components/PropertiesPanel/PropertiesPanel";
import { WidgetProvider } from "./Components/ContextProviders/WidgetProvider";
import { CanvasProvider } from './Components/ContextProviders/CanvasProvider';



function App() {
  return <div className="app">
    <DndProvider backend={HTML5Backend}>
      <WidgetProvider>
        <div className="designer">
          <CanvasProvider>
            <WidgetPanel />
            <Canvas greedy={false} />
          </CanvasProvider>
          <PropertiesPanel />
        </div>
      </WidgetProvider>
    </DndProvider>
  </div >;
}

export default App;
