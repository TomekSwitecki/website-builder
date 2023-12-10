import Header from "./Components/Widgets/Header/Header";
import Photo from "./Components/Widgets/Photo/Photo";
import Paragraph from "./Components/Widgets/Paragraph/Paragraph";
import FlexContainer from "./Components/Widgets/FlexContainer/FlexContainer";

import React from "react";
export const DEFAULT_COLOR = "#000000";
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;


export interface HeaderProps {
  value: string;
  size: typeof HEADER_SIZES[number];
};

interface ParagraphProps {
  value: string;
};

interface FlexContainerProps {
  value: string;
};



export const widgets_library = [
  {
    name: "Header",
    description: "Section text heading",
    cover: "https://picsum.photos/50/50",
    component: <Header />,
    props: {
      value: "Header Initial Value",
      size: "h1",
      color: DEFAULT_COLOR
    } as HeaderProps,
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
    } as ParagraphProps,
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
      value: "Photo"
    } as ParagraphProps,
  },
];