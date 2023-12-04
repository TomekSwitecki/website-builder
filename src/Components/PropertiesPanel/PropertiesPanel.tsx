import React, { useEffect, useState } from "react";
import WidgetProperties from "./WidgetProperties";

import { useWidgetContext } from "../ContextProviders/WidgetProvider";


export function PropertiesPanel() {
  const { selectWidget, selectedWidget } = useWidgetContext();
  const [selectedWidgetOptions, setSelectedWidgetOptions] = useState<React.ReactNode | null>(null);



  useEffect(() => {
    if (selectedWidget) {
      console.log(selectedWidget.name)
      switch (selectedWidget.name) {
        case "Header":
          setSelectedWidgetOptions(<WidgetProperties />);
          break;
        case "Paragraph":
          setSelectedWidgetOptions(<WidgetProperties />);
          break;
        case "Photo":
          setSelectedWidgetOptions(<WidgetProperties />);
          break;
        default:
        // setSelectedWidgetOptions(null)
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