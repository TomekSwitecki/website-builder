export const downloadManager = (content, type, resultName) => {
    const blob = new Blob([content], { type: type });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = resultName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}