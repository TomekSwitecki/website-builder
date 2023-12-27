export const fontStyleDecoder = (style) => {
    switch (style) {
        case "thin":
            return "100";
        case "extra-light":
            return "200";
        case "light":
            return "300";
        case "regular":
            return "400";
        case "medium":
            return "500";
        case "semi-bold":
            return "600";
        case "bold":
            return "700";
        case "extra-bold":
            return "800";
        case "black":
            return "900";
        default:
            return "400";
    }
};