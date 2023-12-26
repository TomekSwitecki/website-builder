import React, { useEffect, useState } from "react";
import WidgetProperties from "./WidgetProperties";
import { extractStaticHtml } from "../../Utils/extractStaticHtml";
import { useWidgetContext } from "../ContextProviders/WidgetProvider";
import Button, { ButtonColor, ButtonType, ButtonShape, ButtonSize } from "../Designer/Button/Button";
import { Trash } from "@vectopus/atlas-icons-react";

export function PropertiesPanel() {
  const { selectedWidget, removeWidget, handleReorder } = useWidgetContext();
  const [selectedWidgetOptions, setSelectedWidgetOptions] = useState(null);

  const handleExtractHtmlClick = (target) => {
    extractStaticHtml(target);
  };

  useEffect(() => {
    if (selectedWidget) {
      setSelectedWidgetOptions(<WidgetProperties />);
    }
  }, [selectedWidget]);


  const handleWidgetDelete = (e) => {
    e.stopPropagation();
    handleReorder(selectedWidget, "delete");
    removeWidget(selectedWidget);
  }


  return (
    <div className="properties-panel"
    >
      <div className="properties-panel__header">{selectedWidget && selectedWidget.name}
        {selectedWidget && <Button
          type={ButtonType.Filled}
          color={ButtonColor.Negative}
          shape={ButtonShape.Rounded}
          size={ButtonSize.Icon}
          text={<Trash size={24} />}
          onClick={(e) => handleWidgetDelete(e)}
        />}
      </div>
      <div className="properties-panel__content">{selectedWidgetOptions}</div>
      <div className="properties-panel__footer">
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

    </div >
  );
}
export default PropertiesPanel;