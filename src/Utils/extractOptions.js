import { widgets_library } from "../WidgetLibrary";
const extractOptions = (propertyName) => {
    const extractedOptions = Array.from(
        new Set(widgets_library.filter(widget => widget.props && widget.props["__" + propertyName]).map(widget => widget.props["__" + propertyName]).flat())
    );
    console.log(extractedOptions)
    return extractedOptions;
}



export default extractOptions;

