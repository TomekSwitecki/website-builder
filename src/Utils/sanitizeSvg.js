export function sanitizeSvg(inputSvg) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(inputSvg, 'image/svg+xml');

    const allElements = doc.querySelectorAll('*');
    allElements.forEach((element) => {
        element.removeAttribute('style');
        element.setAttribute('width', 'inherit');
        element.setAttribute('height', 'inherit');
    });

    const styleElements = doc.querySelectorAll('style');
    styleElements.forEach((styleElement) => {
        styleElement.parentNode.removeChild(styleElement);
    });

    const sanitizedSvg = new XMLSerializer().serializeToString(doc);

    return sanitizedSvg;
}


