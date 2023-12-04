import React, { useState, useEffect } from 'react';
import { useWidgetContext } from '../../ContextProviders/WidgetProvider';
import BEMBuilder from '../../../Utils/BEMbuilder';

function WidgetContainer({ id, children }) {
    const { selectedWidget, setPointedWidget, pointedWidget } = useWidgetContext();
    const [widgetStates, setWidgetStates] = useState([]);

    const handleWidgetStates = (widgetCondition, stateValue, widgetStates, setWidgetStates) => {
        if (widgetCondition) {
            if (!widgetStates.includes(stateValue)) {
                setWidgetStates((prevStates) => [...prevStates, stateValue]);
            }
        } else {
            const newWidgetStatesArray = widgetStates.filter((state) => state !== stateValue);
            setWidgetStates(newWidgetStatesArray);
        }
    };

    useEffect(() => {
        handleWidgetStates(selectedWidget && selectedWidget.id === id, "selected", widgetStates, setWidgetStates);
    }, [selectedWidget]);

    useEffect(() => {
        handleWidgetStates(pointedWidget && pointedWidget === id, "pointed", widgetStates, setWidgetStates);
    }, [pointedWidget]);



    const handleMouseOver = () => {
        setPointedWidget(id)
    }

    const handleMouseOut = () => {
        setPointedWidget(null)
    }

    const widgetContainerClass = BEMBuilder('widget__container', widgetStates);


    return (
        <div id={id} className={widgetContainerClass} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            {children}
        </div>
    );
}

export default WidgetContainer;