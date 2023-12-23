export function extractCssSelectors(css_file, css_class) {
    const pattern = new RegExp(`\\.${css_class}[^\\s{]*\\s*{[^}]*}`, 'g');
    const matches = css_file.match(pattern) || [];
    return matches.join('\n\n');
}