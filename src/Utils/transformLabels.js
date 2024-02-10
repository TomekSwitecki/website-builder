function transformLabels(propName) {
    const spacedString = propName.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
    const capitalizedWords = spacedString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const transformedString = capitalizedWords.join(' ');
    return transformedString;
}

export default transformLabels;

