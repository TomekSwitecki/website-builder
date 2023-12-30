import React, { createContext, useContext, useEffect, useState } from 'react';
import { fontFamilyExtractor } from '../../Utils/fontFamilyExtractor';
const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
    const [canvasFont, setCanvasFont] = useState('');
    const [fontType, setFontType] = useState('serif');
    const [googleFontsUrl, setGoogleFontsUrl] = useState('');
    const [canvasBgColor, setCanvasBgColor] = useState("#FFFFFF");
    const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

    useEffect(() => {
        console.log(fontType)
        if (googleFontsUrl) {
            setCanvasFont(fontFamilyExtractor(googleFontsUrl) + ", " + fontType)
        }

    }, [googleFontsUrl, fontType]);


    const handleGoogleFontUrlChange = (value) => {
        setGoogleFontsUrl(value);
    };

    const handleCanvasBgColor = (value) => {
        setCanvasBgColor(value);
    };

    const handleFontTypeChange = (value) => {
        setFontType(value);
    };

    const handleBgImageUrlChange = (value) => {
        setBackgroundImageUrl(value);
    }
    return (
        <CanvasContext.Provider value={{ canvasFont, fontType, googleFontsUrl, setGoogleFontsUrl, handleGoogleFontUrlChange, handleCanvasBgColor, handleFontTypeChange, canvasBgColor, handleFontTypeChange, handleBgImageUrlChange, backgroundImageUrl }}>
            {children}
        </CanvasContext.Provider>
    );
};


export const useCanvasContext = () => {
    return useContext(CanvasContext);
};
