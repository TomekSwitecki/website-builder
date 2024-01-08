import React, { useState, useContext } from 'react';
import Canvas from "./Components/Canvas/Canvas";
import WidgetPanel from "./Components/WidgetPanel/WidgetPanel";
import PropertiesPanel from "./Components/PropertiesPanel/PropertiesPanel";
import { WidgetProvider } from "./Components/ContextProviders/WidgetProvider";
import { CanvasProvider } from './Components/ContextProviders/CanvasProvider';



function App() {
  return <div className="app">
    <WidgetProvider>
      <div className="designer">
        <CanvasProvider>
          <WidgetPanel />
          <Canvas greedy={false} />
        </CanvasProvider>
        <PropertiesPanel />
      </div>
    </WidgetProvider>
  </div >;
}

export default App;
