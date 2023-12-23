import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!../index.css';
import { extractCssSelectors } from './extractCssSelectors';
import { downloadManager } from './downloadManager';
export const extractStaticHtml = (selectedWidget) => {
  if (selectedWidget) {
    const staticSelectedWidget = document.getElementById(selectedWidget.id);
    const staticSelectedWidgetCSS = (extractCssSelectors(css, selectedWidget.name.toLowerCase()))

    const htmlDocument = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>HTML Boilerplate</title>
         <style>
         ${staticSelectedWidgetCSS}
         widg
         </style>
       </head>
       <body>
         ${staticSelectedWidget.outerHTML}
       </body>
       </html>
     `;
    downloadManager(htmlDocument, 'text/html', selectedWidget.name + '.html');
    downloadManager(staticSelectedWidgetCSS, 'text/css', selectedWidget.name + 'css');
  }
  else {
    const canvasElement = document.getElementById('designer-canvas');
    const staticCSS = css;
    const removePreviewElements = (extractCssSelectors(css, "widget__container"))
    const preparedStaticCSS = staticCSS.replaceAll(removePreviewElements, '');
    const canvasHtml = canvasElement.innerHTML;

    const htmlDocument = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>HTML Boilerplate</title>
         <style>
         ${preparedStaticCSS}
         widg
         </style>
       </head>
       <body>
         ${canvasHtml}
       </body>
       </html>
     `;

    downloadManager(htmlDocument, 'text/html', 'index.html');
  }
};