export function sanitizeSvg(inputSvg) {
    // Use a DOMParser to parse the SVG string
    const parser = new DOMParser();
    const doc = parser.parseFromString(inputSvg, 'image/svg+xml');

    // Remove style attributes from all elements
    const allElements = doc.querySelectorAll('*');
    allElements.forEach((element) => {
        element.removeAttribute('style');
        element.setAttribute('width', 'inherit');
        element.setAttribute('height', 'inherit');
    });

    // Remove style elements
    const styleElements = doc.querySelectorAll('style');
    styleElements.forEach((styleElement) => {
        styleElement.parentNode.removeChild(styleElement);
    });

    // Serialize the updated SVG
    const sanitizedSvg = new XMLSerializer().serializeToString(doc);

    return sanitizedSvg;
}
