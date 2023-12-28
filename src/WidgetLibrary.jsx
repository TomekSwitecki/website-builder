import Header from "./Components/Widgets/Header/Header";
import Image from "./Components/Widgets/Image/Image";
import Video from "./Components/Widgets/Video/Video";
import Frame from "./Components/Widgets/Frame/Frame";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph";
import FlexContainer from "./Components/Widgets/FlexContainer/FlexContainer";

import COVER_HEADING from "../src/Resources/Designer/WidgetCovers/COVER_HEADING.png";
import COVER_TEXT from "../src/Resources/Designer/WidgetCovers/COVER_TEXT.png";
import COVER_IMG from "../src/Resources/Designer/WidgetCovers/COVER_IMG.png";
import COVER_VIDEO from "../src/Resources/Designer/WidgetCovers/COVER_VIDEO.png";
import COVER_LAYOUT from "../src/Resources/Designer/WidgetCovers/COVER_LAYOUT.png";
import COVER_FRAME from "../src/Resources/Designer/WidgetCovers/COVER_FRAME.png";
import COVER_DIVIDER from "../src/Resources/Designer/WidgetCovers/COVER_DIVIDER.png";
import React from "react";
import { json } from "react-router-dom";
import Divider from "./Components/Widgets/Divider/Divider";
export const DEFAULT_COLOR = "#000000";
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const FONT_STYLES = ["thin", "extra-light", "light", "regular", "medium", "semi-bold", "bold", "extra-bold", "black"];
export const BORDER_STYLES = ["solid","dotted","dashed","double","groove","ridge","inset","outset"]
export const TEXT_ALIGNMENTS = ["left", "center", "right"];
export const TEXT_CASING = ["initial", "uppercase", "lowercase", "capitalize"];
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
      width: "fill",
      maxWidth: "",
      minWidth: "",
      setWidth: "",
      borderRadius: "",
      rotation: "",
      flex_direction: "",
      gap: "",
      padding_inline: "",
      padding_block: "",
      backgroundColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: "0",
      innerWidgets: [],
      innerWidgets: [],
      clipOverflowContent: "",
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
      value: "Header Initial Value",
      color: DEFAULT_COLOR,
      font_style: "regular",
      size: "h1",
      text_align: "left",
      text_casing: "initial"
    },
    blueprints: {
      __size: HEADER_SIZES,
      __font_style: FONT_STYLES,
      __text_align: TEXT_ALIGNMENTS,
      __text_casing: TEXT_CASING
    }
  },
  {
    order: 0,
    name: "Paragraph",
    description: "Simple text paragraph",
    cover: COVER_TEXT,
    component: <Paragraph />,
    props: {
      value: "Paragraph Initial Value",
      color: DEFAULT_COLOR,
      font_style: "regular",
      font_size: "16",
      text_align: "left",
      text_casing: "initial"
    },
    blueprints: {
      __font_style: FONT_STYLES,
      __text_align: TEXT_ALIGNMENTS,
      __text_casing: TEXT_CASING
    }
  },
  {
    order: 0,
    name: "Image",
    description: "Image/GIF URL embeding widget.",
    cover: COVER_IMG,
    component: <Image />,
    props: {
      url: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  },
  {
    order: 0,
    name: "Video",
    description: "Video URL embeding widget.",
    cover: COVER_VIDEO,
    component: <Video />,
    props: {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
      url: "",
    },
  },
  {
      order: 0,
      name: "Divider",
      description: "Horizontal rule / divider",
      cover: COVER_DIVIDER,
      component: <Divider />,
      props: {
        color: DEFAULT_COLOR,
        border_style:"solid",
        border_width:"2",
        margin_inline:"0",
        margin_block:"0",
      },
      blueprints: {
        __border_style: BORDER_STYLES,
      }
  }

];