import Header from "./Components/Widgets/Header/Header";
import Photo from "./Components/Widgets/Photo/Photo";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph";
import FlexContainer from "./Components/Widgets/FlexContainer/FlexContainer";

import React from "react";
export const DEFAULT_COLOR = "#000000";
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const WIDTH_VARIANTS = ["fill", "hug", "fixed"];
export const FLEX_DIRECTION_VARIANTS = ["vertical", "horizontal"];
export const FLEX_ITEM_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch"];
export const FLEX_CONTENT_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch", "space-between", "around"];
export const FLEX_JUSTIFY_CONTENT_VARIANTS = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];

export const widgets_library = [
  {
    name: "Header",
    description: "Section text heading",
    cover: "https://picsum.photos/50/50",
    component: <Header />,
    props: {
      value: "Header Initial Value",
      size: "h1",
      color: DEFAULT_COLOR,
      parentID: "",
    },
    blueprints: {
      __size: HEADER_SIZES,
    }
  },
  {
    name: "Paragraph",
    description: "Simple text paragraph",
    cover: "https://picsum.photos/50/50",
    component: <Paragraph />,
    props: {
      value: "Paragraph Initial Value"
    }
  },
  {
    name: "Photo",
    description: "Photo embeding widget",
    cover: "https://picsum.photos/50/50",
    component: <Photo />,
    props: {
      value: "Photo"
    },
  },
  {
    name: "FlexContainer",
    description: "Flex Container",
    cover: "https://picsum.photos/50/50",
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
      paddingInline: "",
      paddingBlock: "",
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
];