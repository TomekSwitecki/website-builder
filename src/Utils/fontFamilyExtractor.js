export const fontFamilyExtractor = (googleFontsUrl) => {
    // Extracting font family name
    const fontFamilyMatch = googleFontsUrl.match(/family=([^&;:]+)/);
    const fontFamily = fontFamilyMatch ? fontFamilyMatch[1].replace(/\+/g, ' ') : null;

    console.log(fontFamily);

    return fontFamily;
};
