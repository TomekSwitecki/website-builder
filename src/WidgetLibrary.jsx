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
import Button from "./Components/Widgets/Button/Button";
import FlexContainer from "./Components/Widgets/FlexContainer/FlexContainer";
import List from "./Components/Widgets/List/List";
import Divider from "./Components/Widgets/Divider/Divider";
import Carousel from "./Components/Widgets/Carousel/Carousel";
import Footer from "./Components/Widgets/Footer/Footer";

import COVER_HEADING from "../src/Resources/Designer/WidgetCovers/COVER_HEADING.png";
import COVER_TEXT from "../src/Resources/Designer/WidgetCovers/COVER_TEXT.png";
import COVER_IMG from "../src/Resources/Designer/WidgetCovers/COVER_IMG.png";
import COVER_VIDEO from "../src/Resources/Designer/WidgetCovers/COVER_VIDEO.png";
import COVER_LAYOUT from "../src/Resources/Designer/WidgetCovers/COVER_LAYOUT.png";
import COVER_FRAME from "../src/Resources/Designer/WidgetCovers/COVER_FRAME.png";
import COVER_DIVIDER from "../src/Resources/Designer/WidgetCovers/COVER_DIVIDER.png";
import COVER_LINK from "../src/Resources/Designer/WidgetCovers/COVER_LINK.png";
import COVER_BUTTON from "../src/Resources/Designer/WidgetCovers/COVER_BUTTON.png";
import COVER_ICON from "../src/Resources/Designer/WidgetCovers/COVER_ICON.png";
import COVER_LIST from "../src/Resources/Designer/WidgetCovers/COVER_LIST.png";
import COVER_CAROUSEL from "../src/Resources/Designer/WidgetCovers/COVER_CAROUSEL.png";
import COVER_FOOTER from "../src/Resources/Designer/WidgetCovers/COVER_FOOTER.png";


export const DEFAULT_COLOR = "#000000";
export const DEFAULT_DIVIDER_COLOR = "#C2C2C2";
export const DEFAULT_BUTTON_COLOR = "#F6F7FA";
export const DEFAULT_BUTTON_BORDER_COLOR = "#C2C2C2";
export const DEFAULT_FOOTER_COLOR = "#F6F7FA";
export const DEFAULT_FOOTER_BORDER_COLOR = "#C2C2C2";

export const DEFAULT_ICON = sanitizeSvg('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>')
export const DEFAULT_FOOTER_LOGO = sanitizeSvg('<svg id="logo-76" width="218" height="40" viewBox="0 0 218 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="ccustom" d="M122.355 29.5238H127.018V11.9352H122.355V29.5238ZM122.355 9.19238H127.018V5.00952H122.355V9.19238Z" fill="black"></path><path class="ccustom" d="M130.023 35.2838H134.686V27.5352H134.754C135.748 29.0438 137.36 30.0381 139.828 30.0381C144.354 30.0381 147.44 26.4381 147.44 20.7467C147.44 15.2609 144.457 11.4552 139.794 11.4552C137.394 11.4552 135.748 12.5867 134.617 14.1295H134.514V11.9352H130.023V35.2838ZM138.834 26.1638C136.057 26.1638 134.583 24.0724 134.583 20.8838C134.583 17.7295 135.748 15.2267 138.663 15.2267C141.543 15.2267 142.708 17.5581 142.708 20.8838C142.708 24.2095 141.2 26.1638 138.834 26.1638Z" fill="black"></path><path class="ccustom" d="M156.741 30.0381C161.13 30.0381 164.147 27.9124 164.147 24.3809C164.147 20.2667 160.89 19.4438 157.941 18.8267C155.438 18.3124 153.107 18.1752 153.107 16.6667C153.107 15.3981 154.307 14.7124 156.124 14.7124C158.113 14.7124 159.313 15.3981 159.518 17.2838H163.735C163.393 13.7524 160.821 11.4552 156.193 11.4552C152.181 11.4552 149.027 13.2724 149.027 17.0781C149.027 20.9181 152.113 21.7752 155.267 22.3924C157.667 22.8724 159.895 23.0438 159.895 24.7238C159.895 25.9581 158.73 26.7467 156.673 26.7467C154.581 26.7467 153.141 25.8552 152.833 23.8324H148.513C148.787 27.5695 151.633 30.0381 156.741 30.0381Z" fill="black"></path><path class="ccustom" d="M181.85 29.5238V11.9352H177.187V22.0838C177.187 24.4152 175.85 26.0609 173.656 26.0609C171.667 26.0609 170.742 24.9295 170.742 22.8724V11.9352H166.113V23.6609C166.113 27.5009 168.307 30.0038 172.216 30.0038C174.685 30.0038 176.056 29.0781 177.256 27.4667H177.359V29.5238H181.85Z" fill="black"></path><path class="ccustom" d="M184.866 29.5238H189.529V19.3067C189.529 16.9752 190.798 15.4667 192.684 15.4667C194.398 15.4667 195.392 16.4952 195.392 18.4838V29.5238H200.055V19.3067C200.055 16.9752 201.255 15.4667 203.209 15.4667C204.924 15.4667 205.918 16.4952 205.918 18.4838V29.5238H210.581V17.6952C210.581 13.8552 208.489 11.4552 204.786 11.4552C202.558 11.4552 200.706 12.6209 199.506 14.5409H199.438C198.581 12.6895 196.798 11.4552 194.569 11.4552C192.135 11.4552 190.421 12.6895 189.461 14.3009H189.358V11.9352H184.866V29.5238Z" fill="black"></path><path class="ccustom" d="M0.824158 29.5238H5.48701V5.00952H0.824158V29.5238Z" fill="black"></path><path class="ccustom" d="M16.8884 30.0381C22.3398 30.0381 26.0769 25.9924 26.0769 20.7467C26.0769 15.5009 22.3398 11.4552 16.8884 11.4552C11.4369 11.4552 7.69978 15.5009 7.69978 20.7467C7.69978 25.9924 11.4369 30.0381 16.8884 30.0381ZM16.8884 26.4724C14.0084 26.4724 12.4312 24.1752 12.4312 20.7467C12.4312 17.3181 14.0084 14.9867 16.8884 14.9867C19.7341 14.9867 21.3455 17.3181 21.3455 20.7467C21.3455 24.1752 19.7341 26.4724 16.8884 26.4724Z" fill="black"></path><path class="ccustom" d="M35.993 35.5238C38.5987 35.5238 40.8616 34.9067 42.3358 33.5352C43.6387 32.3352 44.4273 30.6552 44.4273 28.1867V11.9352H39.9359V13.7867H39.8673C38.8044 12.3124 37.193 11.4552 34.9987 11.4552C30.5416 11.4552 27.3873 14.8152 27.3873 20.0609C27.3873 25.3752 31.2273 28.4609 35.1359 28.4609C37.3644 28.4609 38.7016 27.5695 39.7301 26.4038H39.833V28.3238C39.833 30.7238 38.5644 31.9924 35.9244 31.9924C33.7644 31.9924 32.7701 31.1352 32.393 30.0381H27.7644C28.2444 33.4667 31.193 35.5238 35.993 35.5238ZM35.9244 24.7238C33.5244 24.7238 31.9473 22.9752 31.9473 19.9924C31.9473 17.0438 33.5244 15.1924 35.8901 15.1924C38.7016 15.1924 40.073 17.3867 40.073 19.9581C40.073 22.5638 38.873 24.7238 35.9244 24.7238Z" fill="black"></path><path class="ccustom" d="M55.7611 30.0381C61.2125 30.0381 64.9497 25.9924 64.9497 20.7467C64.9497 15.5009 61.2125 11.4552 55.7611 11.4552C50.3097 11.4552 46.5725 15.5009 46.5725 20.7467C46.5725 25.9924 50.3097 30.0381 55.7611 30.0381ZM55.7611 26.4724C52.8811 26.4724 51.304 24.1752 51.304 20.7467C51.304 17.3181 52.8811 14.9867 55.7611 14.9867C58.6068 14.9867 60.2183 17.3181 60.2183 20.7467C60.2183 24.1752 58.6068 26.4724 55.7611 26.4724Z" fill="black"></path><path class="ccustom" d="M212.275 9.04762C212.275 8.25864 212.915 7.61905 213.704 7.61905H216.561C217.35 7.61905 217.99 8.25864 217.99 9.04762C217.99 9.8366 217.35 10.4762 216.561 10.4762H213.704C212.915 10.4762 212.275 9.8366 212.275 9.04762Z" fill="black"></path><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M93.2277 0C104.273 0 113.228 8.95431 113.228 20C113.228 31.0457 104.273 40 93.2277 40C82.182 40 73.2277 31.0457 73.2277 20C73.2277 8.95431 82.182 0 93.2277 0ZM92.5048 1.49659C90.2231 1.81769 88.0505 3.65108 86.364 6.7174C85.8748 7.60683 85.4334 8.58946 85.0488 9.65044C87.342 9.07417 89.8611 8.73442 92.5048 8.68187V1.49659ZM83.3584 10.1308C83.8368 8.62958 84.4219 7.2484 85.0972 6.02065C85.9332 4.50059 86.9254 3.18795 88.0433 2.17977C81.9644 3.94523 77.1729 8.73679 75.4074 14.8157C76.4156 13.6978 77.7282 12.7056 79.2483 11.8696C80.4761 11.1943 81.8572 10.6091 83.3584 10.1308ZM82.8781 11.8211C82.3018 14.1143 81.9621 16.6334 81.9095 19.2771H74.7242C75.0453 16.9954 76.8787 14.8228 79.9451 13.1364C80.8345 12.6472 81.8171 12.2058 82.8781 11.8211ZM83.3556 19.2771C83.4153 16.392 83.8307 13.6834 84.5179 11.2902C86.9111 10.603 89.6197 10.1876 92.5048 10.1279V13.2508C91.4285 16.0062 89.2333 18.2012 86.4778 19.2771H83.3556ZM81.9095 20.7229H74.7242C75.0453 23.0046 76.8787 25.1771 79.9451 26.8636C80.8345 27.3528 81.8171 27.7942 82.8781 28.1789C82.3018 25.8857 81.9621 23.3666 81.9095 20.7229ZM84.5179 28.7098C83.8307 26.3166 83.4153 23.608 83.3556 20.7229H86.4778C89.2333 21.7988 91.4285 23.9938 92.5048 26.7492V29.8721C89.6197 29.8124 86.9111 29.397 84.5179 28.7098ZM83.3584 29.8692C81.8572 29.3909 80.4761 28.8057 79.2483 28.1304C77.7282 27.2944 76.4156 26.3022 75.4074 25.1843C77.1729 31.2632 81.9644 36.0548 88.0433 37.8202C86.9254 36.812 85.9332 35.4994 85.0972 33.9793C84.4219 32.7516 83.8368 31.3704 83.3584 29.8692ZM92.5048 38.5034C90.2231 38.1823 88.0505 36.3489 86.364 33.2826C85.8748 32.3932 85.4334 31.4105 85.0488 30.3496C87.342 30.9258 89.8611 31.2656 92.5048 31.3181V38.5034ZM98.412 37.8202C99.5299 36.812 100.522 35.4994 101.358 33.9793C102.033 32.7516 102.619 31.3704 103.097 29.8692C104.598 29.3909 105.979 28.8057 107.207 28.1304C108.727 27.2944 110.04 26.3022 111.048 25.1843C109.282 31.2632 104.491 36.0548 98.412 37.8202ZM101.407 30.3496C101.022 31.4105 100.58 32.3932 100.091 33.2826C98.4048 36.3489 96.2322 38.1823 93.9505 38.5034V31.3181C96.5942 31.2656 99.1133 30.9258 101.407 30.3496ZM103.577 28.1789C104.638 27.7942 105.621 27.3528 106.51 26.8636C109.577 25.1772 111.41 23.0046 111.731 20.7229H104.546C104.493 23.3666 104.153 25.8857 103.577 28.1789ZM103.1 20.7229C103.04 23.608 102.625 26.3166 101.937 28.7098C99.5442 29.397 96.8356 29.8124 93.9505 29.8721V26.7515C95.0265 23.9951 97.2222 21.7991 99.9784 20.7229H103.1ZM104.546 19.2771H111.731C111.41 16.9954 109.577 14.8228 106.51 13.1364C105.621 12.6472 104.638 12.2058 103.577 11.8211C104.153 14.1143 104.493 16.6334 104.546 19.2771ZM101.937 11.2902C102.625 13.6834 103.04 16.392 103.1 19.2771H99.9785C97.2222 18.2009 95.0265 16.0049 93.9505 13.2485V10.1279C96.8356 10.1876 99.5442 10.603 101.937 11.2902ZM103.097 10.1308C104.598 10.6091 105.979 11.1943 107.207 11.8696C108.727 12.7056 110.04 13.6978 111.048 14.8157C109.282 8.73679 104.491 3.94523 98.412 2.17977C99.5299 3.18795 100.522 4.50059 101.358 6.02065C102.033 7.2484 102.619 8.62958 103.097 10.1308ZM93.9505 1.49659C96.2322 1.81769 98.4048 3.65108 100.091 6.7174C100.58 7.60684 101.022 8.58946 101.407 9.65044C99.1133 9.07417 96.5942 8.73442 93.9505 8.68187V1.49659Z" fill="black"></path></svg>')
export const HEADER_SIZES = ["h1", "h2", "h3", "h4", "h5", "h6"];
export const FONT_STYLES = ["thin", "extra-light", "light", "regular", "medium", "semi-bold", "bold", "extra-bold", "black"];
export const BORDER_STYLES = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"]
export const TEXT_ALIGNMENTS = ["left", "center", "right"];
export const TEXT_CASING = ["initial", "uppercase", "lowercase", "capitalize"];
export const TEXT_DECORATIONS = ["none", "underline", "line-through"];
export const WIDTH_VARIANTS = ["fill", "hug", "fixed"];
export const FLEX_DIRECTION_VARIANTS = ["vertical", "horizontal"];
export const FLEX_ITEM_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch"];
export const FLEX_CONTENT_ALIGNMENT_VARIANTS = ["flex-start", "center", "flex-end", "stretch", "space-between", "around"];
export const FLEX_JUSTIFY_CONTENT_VARIANTS = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
export const BACKGROUND_SIZE = ["contain", "cover", "fill", "scale-down", "none"]
export const LIST_TYPES = ["ordered", "unordered"];
export const widgets_library = [
  {
    order: 0,
    name: "Container",
    description: "Container ",
    cover: COVER_LAYOUT,
    component: <FlexContainer />,
    props: {
      width_type: "fixed",
      width: { value: "45", min: "0", max: "100", unit: "%", },
      height_type: "fixed",
      height: { value: "25", min: "0", max: "100", unit: "%" },
      borderRadius: { value: "0", min: "0", max: "100", unit: "px" },
      rotation: { value: "0", unit: "deg" },
      flex_direction: "horizontal",
      gap: { value: "0", unit: "px" },
      padding_inline: { value: "0", unit: "px" },
      padding_block: { value: "0", unit: "px" },
      backgroundColor: "#ffffff",
      border_color: "#000000",
      border_width: { value: "0", unit: "px" },
      innerWidgets: [],
      innerWidgets: [],
      clipOverflowContent: false,
      flex_align_items: "flex-start",
      flex_justify_content: "",
      flex_align_content: ""
    },
    blueprints: {
      __width_type: WIDTH_VARIANTS,
      __height_type: WIDTH_VARIANTS,
      __flex_direction: FLEX_DIRECTION_VARIANTS,
      __flex_align_items: FLEX_ITEM_ALIGNMENT_VARIANTS,
      __flex_justify_content: FLEX_JUSTIFY_CONTENT_VARIANTS,
      __flex_align_content: FLEX_CONTENT_ALIGNMENT_VARIANTS,
    }
  },
  {
    order: 0,
    name: "Heading",
    description: "Section text heading",
    cover: COVER_HEADING,
    component: <Header />,
    props: {
      value: { value: "Heading Initial Value" },
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
      line_height: { value: "25", unit: "px" },
      letter_spacing: { value: "0", min: "0", max: "100", unit: "px" },
      // truncate: false,
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
    name: "List",
    description: "List widget",
    cover: COVER_LIST,
    component: <List />,
    props: {
      list_type: "ordered",
      value: { value: "List Item 1 \nList Item 2\nList Item 3" },
      color: DEFAULT_COLOR,
      font_size: { value: "16", min: "1", max: "512", unit: "px" },
      font_style: "regular",
      text_align: "left",
      text_casing: "initial",
      text_decoration: "none",
      line_height: { value: "25", unit: "px" },
    },
    blueprints: {
      __list_type: LIST_TYPES,
      __text_align: TEXT_ALIGNMENTS,
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
      width_type: "fixed",
      width: { value: "45", min: "0", max: "100", unit: "%", },
      height_type: "fixed",
      height: { value: "25", min: "0", max: "100", unit: "%", },
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
    name: "Button",
    description: "Button widget",
    cover: COVER_BUTTON,
    component: <Button />,
    props: {
      value: { value: "Button" },
      color: DEFAULT_COLOR,
      font_style: "regular",
      font_size: { value: "16", min: "1", max: "512", unit: "px" },
      text_casing: "initial",
      padding_inline: { value: "32", unit: "px" },
      padding_block: { value: "12", unit: "px" },
      backgroundColor: DEFAULT_BUTTON_COLOR,
      border_color: DEFAULT_BUTTON_BORDER_COLOR,
      borderRadius: { value: "8", min: "0", max: "100", unit: "px" },
      border_width: { value: "2", unit: "px" },
      border_style: "solid",
    },
  },
  {
    order: 0,
    name: "Image",
    description: "Image/GIF URL embeding widget.",
    cover: COVER_IMG,
    component: <Image />,
    props: {
      url: { value: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      background_size: "100%"
    },
    blueprints: {
      __background_size: BACKGROUND_SIZE,

    }
  },
  {
    order: 0,
    name: "Photo Carousel",
    description: "Photo sliding carousel",
    cover: COVER_CAROUSEL,
    component: <Carousel />,
    props: {
      url: { value: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      speed: { value: 24, min: "0", max: "200", unit: "s", },
      gap: { value: "32", unit: "px" },
      reverseAnimDirection: false,
      background_size: "100%"
    }
    ,
    blueprints: {
      __background_size: BACKGROUND_SIZE,

    }
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
      margin_inline: { value: "16", min: "0", max: "512", unit: "px" },
      margin_block: { value: "32", min: "0", max: "512", unit: "px" },
    },
    blueprints: {
      __border_style: BORDER_STYLES,
    }
  },
  {
    order: 0,
    name: "Footer",
    description: "Website footer",
    cover: COVER_FOOTER,
    component: <Footer />,
    props: {
      description: { value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam." },
      addres_line_1: { value: "Pomorska 149/153" },
      addres_line_2: { value: "90-236 Łódź" },
      mail: { value: "uł@mail.edu.pl" },
      phone: { value: "+426354261" },
      logo_size: { value: "128", min: "0", max: "512", unit: "px" },
      logo_svg: { value: DEFAULT_FOOTER_LOGO },
      map_url: { value: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9874.436617189269!2d19.489263!3d51.776752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb3c1a1b8f9d%3A0x564566d8e927e1dd!2sWydzia%C5%82%20Fizyki%20i%20Informatyki%20Stosowanej%20Uniwersytetu%20%C5%81%C3%B3dzkiego!5e0!3m2!1spl!2spl!4v1705242184111!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` },
      show_map: "true",
      vertical_gap: { value: "32", unit: "px" },
      horizontal_gap: { value: "96", unit: "px" },
      copyright: { value: "©Company name 2024" },
      height_type: "fixed",
      height: { value: "35", min: "0", max: "100", unit: "%", },
      padding_inline: { value: "24", unit: "px" },
      padding_block: { value: "32", unit: "px" },
      textColor: DEFAULT_COLOR,
      backgroundColor: DEFAULT_FOOTER_COLOR,
      border_width: { value: "24", unit: "px" },
      border_style: "solid",
      border_color: DEFAULT_FOOTER_BORDER_COLOR,
    },
  }

];