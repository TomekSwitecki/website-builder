import React, { useEffect, useState } from "react";
import WidgetProperties from "./WidgetProperties";
import { extractStaticHtml } from "../../Utils/extractStaticHtml";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import Button, { ButtonColor, ButtonType, ButtonShape, ButtonSize } from "../Designer/Button/Button";


export function PropertiesPanel() {
  const { selectedWidget } = useWidgetContext();
  const [selectedWidgetOptions, setSelectedWidgetOptions] = useState(null);

  const handleExtractHtmlClick = (target) => {
    extractStaticHtml(target);
  };

  useEffect(() => {
    if (selectedWidget) {
      setSelectedWidgetOptions(<WidgetProperties />);
    }
  }, [selectedWidget]);


  return (
    <div className="properties-panel"
    >
      {selectedWidget && <div>{selectedWidget.name}</div>}
      {selectedWidgetOptions}
      {selectedWidget && <Button
        type={ButtonType.Filled}
        color={ButtonColor.Default}
        shape={ButtonShape.Rounded}
        size={ButtonSize.Compact}
        text={"Export selected widget"}
        onClick={() => handleExtractHtmlClick(selectedWidget)}
      />}
      <Button
        type={ButtonType.Filled}
        color={ButtonColor.Primary}
        shape={ButtonShape.Rounded}
        size={ButtonSize.Compact}
        text={"Export full static website"}
        onClick={() => handleExtractHtmlClick(null)}
      />
    </div>
  );
}
export default PropertiesPanel;