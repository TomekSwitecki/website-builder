import React from "react";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Canvas from "./Components/Canvas/Canvas";
import WidgetPanel from "./Components/WidgetPanel/WidgetPanel";
import { WidgetProvider } from "./Components/ContextProviders/WidgetProvider";
import PropertiesPanel from "./Components/PropertiesPanel/PropertiesPanel";

function App() {
  return <div className="app">
    <DndProvider backend={HTML5Backend}>
      <WidgetProvider>
        <div className="designer">
          <WidgetPanel />
          <Canvas />
          <PropertiesPanel />
        </div>
      </WidgetProvider>
    </DndProvider>
  </div>;
}

export default App;
