import Header from "./Components/Widgets/Header/Header";
import Photo from "./Components/Widgets/Photo/Photo";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph";

import React from "react";
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;


export interface HeaderProps {
  value: string;
  size: typeof HEADER_SIZES[number];
};

interface ParagraphProps {
  value: string;
};



export const widgets_library = [
  {
    name: "Header",
    description: "Section text heading",
    cover: "https://picsum.photos/50/50",
    component: <Header />,
    parentID: "",
    level: 0,
    props: {
      value: "Header Initial Value",
      size: "h1",
      __size: HEADER_SIZES,
    } as HeaderProps,
  },
  {
    name: "Paragraph",
    description: "Simple text paragraph",
    cover: "https://picsum.photos/50/50",
    component: <Paragraph value="test" />,
    parentID: "",
    level: 0,
    props: {
      value: "Paragraph Initial Value"
    } as ParagraphProps,
  },
  {
    name: "Photo",
    description: "Photo embeding widget",
    cover: "https://picsum.photos/50/50",
    component: <Photo />,
    parentID: "",
    level: 0,
    props: {
      value: "Photo"
    },
  },
  // {
  //   name: "FlexContainer",
  //   description: "Flex Container",
  //   itemPhotoCover: "https://picsum.photos/50/50",
  //   component: <FlexContainer />,
  //   parentID: "",
  //   level: 0,
  //   appendedWidgets: [],
  // },
];