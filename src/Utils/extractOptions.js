import { widgets_library } from "../WidgetLibrary";
const extractOptions = (propertyName) => {
    const extractedOptions = Array.from(
        new Set(widgets_library.filter(widget => widget.blueprints && widget.blueprints["__" + propertyName]).map(widget => widget.blueprints["__" + propertyName]).flat())
    );
    console.log(extractedOptions)
    return extractedOptions;
}



export default extractOptions;

