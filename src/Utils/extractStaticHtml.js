import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!../index.css';
import { extractCssSelectors } from './extractCssSelectors';
import { downloadManager } from './downloadManager';

export const extractStaticHtml = () => {
  const canvasElement = document.getElementById('designer-canvas');
  const staticCSS = css;
  const removePreviewElements = (extractCssSelectors(css, "widget__container"))
  const preparedStaticCSS = staticCSS.replaceAll(removePreviewElements, '');
  const canvasHtml = canvasElement.outerHTML;

  const htmlDocument = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Website</title>
         <style>
         ${preparedStaticCSS}
         widg
         </style>
       </head>
       <script>
       </script>
       <body>
         ${canvasHtml}
       </body>
       </html>
     `;

  downloadManager(htmlDocument, 'text/html', 'index.html');
};



