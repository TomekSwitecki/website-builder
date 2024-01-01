import React, { useEffect, useState, useContext } from "react";
import { widgets_library } from "../../WidgetLibrary";
import WidgetPanelItem from "./WidgetPanelItem";
import TextInput from "../Designer/TextInput/TextInput";
import ColorSelect from "../Designer/ColorSelect/ColorSelect";
import { useCanvasContext } from '../ContextProviders/CanvasProvider';
import Tabs from "../Designer/Tabs/Tabs";
import SelectInput from "../Designer/Select/SelectInput";
function WidgetPanel() {
  const [activeTab, setActiveTab] = useState("widgets");

  const { canvasBgColor, googleFontsUrl, fontType, handleGoogleFontUrlChange, handleCanvasBgColor, handleFontTypeChange, handleBgImageUrlChange, backgroundImageUrl } = useCanvasContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const AssetsWidgets = (
    <>
      {widgets_library.map((widget, index) => (
        <WidgetPanelItem index={index} key={index} widget={widget}></WidgetPanelItem>
      ))}
    </>
  );

  const CanvasSettings = (
    <>
      <TextInput textArea label={"Google Fonts URL"} value={googleFontsUrl} onChange={(e) => handleGoogleFontUrlChange(e.target.value)} />
      <SelectInput label={"Font Type"} id={"Font type"} value={fontType} options={["serif", "sans-serif"]} onChange={(value) => handleFontTypeChange(value)} />
      <ColorSelect label={"Canvas Background"} value={canvasBgColor} onChange={(e) => handleCanvasBgColor(e.target.value)} />
      <TextInput textArea label={"Background Image URL"} value={backgroundImageUrl} onChange={(e) => handleBgImageUrlChange(e.target.value)} />
    </>
  ); handleFontTypeChange

  const tabs = ["widgets", "settings"];

  return (
    <div className="widget-panel" id="widget-panel">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="widget-panel_content">
        {activeTab == "widgets" && AssetsWidgets}
        {activeTab == "settings" && CanvasSettings}
      </div>

    </div>
  )
}

export default WidgetPanel;