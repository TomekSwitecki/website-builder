import React from "react";

function Tabs({ tabs, activeTab, onTabChange }) {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button key={tab} onClick={() => onTabChange(tab)} className={activeTab === tab ? "tab-button--active" : "tab-button"}>
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Tabs;