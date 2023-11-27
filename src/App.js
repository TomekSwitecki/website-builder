import React from "react";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Canvas from "./Components/Canvas/Canvas";
import WidgetPanel from "./Components/WidgetPanel/WidgetPanel";


function App() {
  return <div className="App">
    <DndProvider backend={HTML5Backend}>
      <WidgetPanel />
      <Canvas>
        <div>test</div>
      </Canvas>
    </DndProvider>
  </div>;
}

export default App;
