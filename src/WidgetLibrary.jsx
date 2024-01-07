import React from "react";
import { json } from "react-router-dom";
import { sanitizeSvg } from "./Utils/sanitizeSvg";

import Header from "./Components/Widgets/Header/Header";
import Image from "./Components/Widgets/Image/Image";
import Video from "./Components/Widgets/Video/Video";
import Frame from "./Components/Widgets/Frame/Frame";
import Text from "./Components/Widgets/Text/Text";
import Link from "./Components/Widgets/Link/Link";
import Icon from "./Components/Widgets/Icon/Icons";
import FlexContainer from "./Components/Widgets/FlexContainer/FlexContainer";

import COVER_HEADING from "../src/Resources/Designer/WidgetCovers/COVER_HEADING.png";
import COVER_TEXT from "../src/Resources/Designer/WidgetCovers/COVER_TEXT.png";
import COVER_IMG from "../src/Resources/Designer/WidgetCovers/COVER_IMG.png";
import COVER_VIDEO from "../src/Resources/Designer/WidgetCovers/COVER_VIDEO.png";
import COVER_LAYOUT from "../src/Resources/Designer/WidgetCovers/COVER_LAYOUT.png";
import COVER_FRAME from "../src/Resources/Designer/WidgetCovers/COVER_FRAME.png";
import COVER_DIVIDER from "../src/Resources/Designer/WidgetCovers/COVER_DIVIDER.png";
import COVER_LINK from "../src/Resources/Designer/WidgetCovers/COVER_LINK.png";
import COVER_ICON from "../src/Resources/Designer/WidgetCovers/COVER_ICON.png";

import Divider from "./Components/Widgets/Divider/Divider";


export const DEFAULT_COLOR = "#000000";
export const DEFAULT_DIVIDER_COLOR = "#C2C2C2";
export const DEFAULT_ICON = sanitizeSvg('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>')
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const FONT_STYLES = ["thin", "extra-light", "light", "regular", "medium", "semi-bold", "bold", "extra-bold", "black"];
export const BORDER_STYLES = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"]
export const TEXT_ALIGNMENTS = ["left", "center", "right"];
export const TEXT_CASING = ["initial", "uppercase", "lowercase", "capitalize"];
export const TEXT_DECORATIONS = ["none", "underline", "line-through"]
export const WIDTH_VARIANTS = ["fill", "hug", "fixed"];
export const FLEX_DIRECTION_VARIANTS = ["vertical", "horizontal"];
export const FLEX_ITEM_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch"];
export const FLEX_CONTENT_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch", "space-between", "around"];
export const FLEX_JUSTIFY_CONTENT_VARIANTS = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];

export const widgets_library = [
  {
    order: 0,
    name: "Container",
    description: "Container ",
    cover: COVER_LAYOUT,
    component: <FlexContainer />,
    props: {
      width: "fixed",
      setWidth: { value: "25", min: "0", max: "100", unit: "%", },

      // maxWidth: { value: "", min: "0", max: "100", unit: "%" },
      // minWidth: { value: "", min: "0", max: "100", unit: "%" },
      borderRadius: { value: "0", min: "0", max: "100", unit: "px" },
      rotation: { value: "0", unit: "deg" },
      flex_direction: "vertical",
      gap: { value: "0", unit: "px" },
      padding_inline: { value: "12", unit: "px" },
      padding_block: { value: "12", unit: "px" },
      backgroundColor: "#ffffff",
      border_color: "#000000",
      border_width: { value: "0", unit: "px" },
      innerWidgets: [],
      innerWidgets: [],
      clipOverflowContent: false,
      flex_align_items: "",
      flex_justify_content: "",
      flex_align_content: ""
    },
    blueprints: {
      __width: WIDTH_VARIANTS,
      __flex_direction: FLEX_DIRECTION_VARIANTS,
      __flex_align_items: FLEX_ITEM_ALIGNMENT_VARIANTS,
      __flex_justify_content: FLEX_JUSTIFY_CONTENT_VARIANTS,
      __flex_align_content: FLEX_CONTENT_ALIGNMENT_VARIANTS,
    }
  },
  {
    order: 0,
    name: "Header",
    description: "Section text heading",
    cover: COVER_HEADING,
    component: <Header />,
    props: {
      value: { value: "Header Initial Value" },
      color: DEFAULT_COLOR,
      font_style: "regular",
      header_size: "h1",
      text_align: "left",
      text_casing: "initial"
    },
    blueprints: {
      __header_size: HEADER_SIZES,
      __font_style: FONT_STYLES,
      __text_align: TEXT_ALIGNMENTS,
      __text_casing: TEXT_CASING
    }
  },
  {
    order: 0,
    name: "Text",
    description: "Simple text widget",
    cover: COVER_TEXT,
    component: <Text />,
    props: {
      value: { value: "Text Initial Value" },
      color: DEFAULT_COLOR,
      font_style: "regular",
      font_size: { value: "16", min: "1", max: "512", unit: "px" },
      text_align: "left",
      text_casing: "initial",
      text_decoration: "none",
      line_height: "normal",
      letter_spacing: { value: "0", min: "0", max: "100", unit: "px" },
      truncate: false,
    },
    blueprints: {
      __font_style: FONT_STYLES,
      __text_align: TEXT_ALIGNMENTS,
      __text_casing: TEXT_CASING,
      __text_decoration: TEXT_DECORATIONS
    }
  },
  {
    order: 0,
    name: "Link",
    description: "Simple link widget",
    cover: COVER_LINK,
    component: <Link />,
    props: {
      url: { value: "https://www.google.pl/?hl=pl" },
    },

  },
  {
    order: 0,
    name: "Icon",
    description: "Icon widget",
    cover: COVER_ICON,
    component: <Icon />,
    props: {
      svg: { value: DEFAULT_ICON },
      fill_color: DEFAULT_COLOR,
      transparent_fill: false,
      stroke_color: DEFAULT_COLOR,
      transparent_stroke: false,
      stroke_width: { value: "0", min: "0", max: "512", unit: "px" },
      size: { value: "40", min: "0", max: "512", unit: "px" },
    },
  },
  {
    order: 0,
    name: "Image",
    description: "Image/GIF URL embeding widget.",
    cover: COVER_IMG,
    component: <Image />,
    props: {
      url: { value: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    },
  },
  {
    order: 0,
    name: "Video",
    description: "Video URL embeding widget.",
    cover: COVER_VIDEO,
    component: <Video />,
    props: {
      url: { value: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      controls: "true",
      autoplay: "false",
      loop: "true",
      file: null,
    },
  },
  {
    order: 0,
    name: "Frame",
    description: "iFrame embeding widget. (e.g. Google Maps embedding)",
    cover: COVER_FRAME,
    component: <Frame />,
    props: {
      url: { value: "" },
    },
  },
  {
    order: 0,
    name: "Divider",
    description: "Horizontal rule / divider",
    cover: COVER_DIVIDER,
    component: <Divider />,
    props: {
      color: DEFAULT_DIVIDER_COLOR,
      border_style: "solid",
      border_width: { value: "2", min: "0", max: "50", unit: "px" },
      margin_inline: { value: "16", min: "0", max: "50", unit: "px" },
      margin_block: { value: "32", min: "0", max: "50", unit: "px" },
    },
    blueprints: {
      __border_style: BORDER_STYLES,
    }
  }

];