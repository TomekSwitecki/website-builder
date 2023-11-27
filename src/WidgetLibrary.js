import Header from "./Components/Widgets/Header/Header.jsx";
import Photo from "./Components/Widgets/Photo/Photo.jsx";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph.jsx";

import React from "react";
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
    },
  },
  {
    name: "Paragraph",
    description: "Simple text paragraph",
    cover: "https://picsum.photos/50/50",
    component: <Paragraph />,
    parentID: "",
    level: 0,
    props: {
      value: "Paragraph Initial Value"
    },
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