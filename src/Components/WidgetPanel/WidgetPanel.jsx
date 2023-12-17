import React, { useEffect, useState, useContext } from "react";
import { widgets_library } from "../../WidgetLibrary";
import WidgetPanelItem from "./WidgetPanelItem";

function WidgetPanel() {


  const assetsWidgets = (
    <>
      {widgets_library.map((widget, index) => (
        <WidgetPanelItem index={index} key={index} widget={widget}></WidgetPanelItem>
      ))}
    </>
  );


  return (
    <div className="widget-panel" id="widget-panel">
      {assetsWidgets}
    </div>
  )
}

export default WidgetPanel;