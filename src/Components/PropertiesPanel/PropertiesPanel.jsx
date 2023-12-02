import React, { useEffect, useState } from "react";
import HeaderProperties from "./HeaderProperties";

import { useWidgetContext } from "../ContextProviders/WidgetProvider";


export function PropertiesPanel() {
  const { selectWidget, selectedWidget } = useWidgetContext();
  const [selectedWidgetOptions, setSelectedWidgetOptions] = useState()



  useEffect(() => {
    if (selectedWidget) {
      console.log(selectedWidget.name)
      switch (selectedWidget.name) {
        case "Header":
          setSelectedWidgetOptions(<HeaderProperties selectedWidget={selectedWidget} />);
          break;
        case "Paragraph":
          setSelectedWidgetOptions(<HeaderProperties selectedWidget={selectedWidget} />);
          break;
        case "Photo":
          setSelectedWidgetOptions(<HeaderProperties selectedWidget={selectedWidget} />);
          break;
        default:
          setSelectedWidgetOptions(null)
      }
    }
  }, [selectedWidget]);


  return (
    <div className="properties-panel"
    >
      {selectedWidgetOptions}
    </div>
  );
}
export default PropertiesPanel;