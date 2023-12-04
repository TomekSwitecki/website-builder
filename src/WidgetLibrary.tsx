import Header from "./Components/Widgets/Header/Header";
import Photo from "./Components/Widgets/Photo/Photo";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph";

import React from "react";
interface HeaderProps {
  value: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
      size: "h1"
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