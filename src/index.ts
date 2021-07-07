import parse from "parse-color";
import { darken, lighten } from "polished";
import "./reset.scss";
import "./index.scss";
export { default as Button } from "./component/Button";
export { default as Input } from "./component/Input";
export { default as Spinner } from "./component/Spinner";
export { default as Text } from "./component/Text";
export { default as Textarea } from "./component/Textarea";
export { default as Modal } from "./component/Modal";
export { default as Tooltip } from "./component/Tooltip";
export { default as Icon } from "./component/Icon";
export { default as CustomSelect } from "./component/CustomSelect";
export { default as Toggle } from "./component/Toggle";
export { default as Callout } from "./component/Callout";
export { default as Option, OptionItem } from "./component/Option";
export { default as Divider } from "./component/Divider";

export { PickerPositionIcon } from "./component/Icon/fitple_picker/PickerPositionIcon";
export { PickerToggleIcon } from "./component/Icon/fitple_picker/PickerToggleIcon";

export * from "./utils/colorGenerate";

export type TButtonSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
export type TFontSize =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large"
  | "xxx-large"
  | "xxxx-large";

const isSameColor = (color1: string, color2: string) => {
  const v1 = parse(color1);
  const v2 = parse(color2);
  return v1.hex === v2.hex;
};

// Spoqa chevron
export const right = `&#xE001;`;
export const left = `&#xE000;`;

// Font Family
export const font = `"Spoqa Han Sans Neo", "sans_serif"`;

// Font Weight
export const font_weight_light = 300;
export const font_weight_regular = 400;
export const font_weight_medium = 500;
export const font_weight_bold = 600;

// Font Size
export const font_size_xx_small = `1.2rem`;
export const font_size_x_small = `1.3rem`;
export const font_size_small = `1.4rem`;
export const font_size_medium = `1.6rem`;
export const font_size_large = `1.8rem`;
export const font_size_x_large = `2.1rem`;
export const font_size_xx_large = `2.4rem`;
export const font_size_xxx_large = `3.6rem`;
export const font_size_xxxx_large = `4.8rem`;

// Line Height
export const line_height_medium = `1.5em`;
export const line_height_large = `1.75em`;

// Spacer
export const spacer_xx_small = `0.4rem`;
export const spacer_x_small = `0.8rem`;
export const spacer_small = `1.2rem`;
export const spacer_medium = `1.6rem`;
export const spacer_large = `2rem`;
export const spacer_x_large = `2.8rem`;
export const spacer_xx_large = `6rem`;

/////////////////* Color */////////////////

// Primary Blue
export const blue_0 = `#f3f9ff`;
export const blue_1 = `#E6F2FF`;
export const blue_2 = `#C5E1FF`;
export const blue_3 = `#92C7FF`;
export const blue_4 = `#5FACFF`;
export const blue_5 = `#1184FF`;
export const blue_6 = `#0C6CD3`;
export const blue_7 = `#004C9E`;
export const blue_8 = `#003267`;

// Gray
export const white = `#fff`;
export const gray_0 = `#F9F9FB`;
export const gray_1 = `#EFEFF2`;
export const gray_2 = `#EBEBEE`;
export const gray_3 = `#E0E0E5`;
export const gray_4 = `#CACACC`;
export const gray_5 = `#B1B1B3`;
export const gray_6 = `#767679`;
export const gray_7 = `#444348`;
export const gray_8 = `#15141A`;
export const blue_gray = `#8F8F9C`;

// System Color
export const active_green = `#69DB7C`;
export const inactive_red = `#FF8787`;
export const warning_red_1 = `#FFF0EE`;
export const warning_red_2 = `#F8D0D1`;

// Green
export const green = `#34C759`;
export const thumbs_green = `#40C057`;
export const text_green = `#00A21D`;

// Red
export const red_5 = `#FF6B6B`;
export const red_6 = `#FA5252`;
export const red_7 = `#F03E3E`;
export const red_8 = `#E03131`;
export const red_9 = `#C92A2A`;
export const red_10 = `#A51111`;

// Orange
export const orange_1 = `#FFECE2`;
export const interview_orange_7 = `#F38119`;

// Refferal Color
export const referral_blue_1 = `#E8EFF7`;
export const referral_blue_7 = `#1864AB`;

// Shadow
export const shadow_sm = `0 2px 4px rgba(0, 0, 0, 0.1)`;
export const shadow_md0 = `0 4px 8px rgba(0, 0, 0, 0.12)`;
export const shadow_md1 = `0 2px 4px rgba(0, 0, 0, 0.08)`;
export const shadow_lg0 = `0 5px 30px rgba(0, 0, 0, 0.12)`;
export const shadow_lg1 = `0 5px 15px rgba(0, 0, 0, 0.08)`;
export const shadow_option = `0 2px 6px rgba(0, 0, 0, 0.16)`;

// Container
export const login_container_width = `772px`;

// Transition Variables
export const button_hover_transition = `ease-in-out 0.2s`;

// Mixin
// * $WH: Width, height value (e.g. 160px)
// * $Bsize: border-size value (e.g. 3px)
// * $Bc0: border-color value (e.g. #fff)
// * $Bc1: border-background-color value (e.g. #ffffff33)
export const CustomSpin = (
  WH = `16px`,
  Bsize = `3px`,
  Bc0 = `#fff`,
  Bc1 = `rgba(255, 255, 255, 0.2)`,
) => `
  width: ${WH};
  height: ${WH};
  border: ${Bsize} solid ${Bc0};
  margin: 0;
  content: " ";
  display: block;
  border-radius: 50%;
  border-color: ${Bc0} ${Bc1} ${Bc1} ${Bc1};
  animation: spin 1.15s cubic-bezier(0.31, 0.63, 0.8, 0.73) infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// * $bgc: background-color (e.g. #fff)
// * $fc: font-color (e.g. #111)
// * $dis-bgc: disabled background-color
// * $dis-fc: disabled font-color

export const button_color = (bgc = gray_7, fc = "white") => {
  const isSameWithBgcAndGray1 = isSameColor(bgc, gray_1);
  const isSameWithBgcAndGray4 = isSameColor(bgc, gray_4);
  const isSameWithBgcAndGray7 = isSameColor(bgc, gray_7);
  const isSameWithBgcAndBlue5 = isSameColor(bgc, blue_5);
  const isSameWithBgcAndRed7 = isSameColor(bgc, red_7);
  return `
    background-color: ${bgc};
    color: ${fc};
    &:hover {
      ${
        isSameWithBgcAndGray1
          ? `color: ${gray_8};`
          : isSameWithBgcAndGray7
          ? `background: ${gray_8};`
          : isSameWithBgcAndBlue5
          ? `background: ${blue_6};`
          : isSameWithBgcAndRed7
          ? `background: ${red_8};`
          : `background: ${darken(0.1, bgc)};`
      }
    }
    &:active {
      ${
        isSameWithBgcAndGray4
          ? `background: ${gray_4};`
          : isSameWithBgcAndGray7
          ? `background: ${gray_7};`
          : isSameWithBgcAndBlue5
          ? `background: ${blue_7};`
          : isSameWithBgcAndRed7
          ? `background: ${red_9};`
          : `background: ${lighten(0.05, bgc)};`
      }
    }
    &.ghost {
      background: transparent;
      border-width: 1px;
      border-style: solid;
      color: ${bgc};
      ${
        isSameWithBgcAndGray1
          ? `
            border-color: ${gray_4};
            color: ${gray_8};
          `
          : isSameWithBgcAndGray7
          ? `
            color: ${gray_8};
          `
          : ``
      }
      &:hover {
        ${
          isSameWithBgcAndGray1
            ? `
              background-color: ${gray_1};
            `
            : `
              background: ${bgc};
              color: ${fc};
              border-color: ${bgc};
            `
        }
      }
      &:active {
        ${
          isSameWithBgcAndGray1
            ? `
              background: ${gray_3};
            `
            : isSameWithBgcAndBlue5
            ? `
              background: ${blue_6};
              border-color: ${blue_6};
            `
            : isSameWithBgcAndRed7
            ? `
              background: ${red_9};
              border-color: ${red_9};
            `
            : `
              background: ${darken(0.15, bgc)};
              border-color: ${darken(0.15, bgc)};
            `
        }
      }
    }
    &.quiet {
      background: transparent;
      ${
        isSameWithBgcAndGray1
          ? `
            color: ${gray_8};
          `
          : isSameWithBgcAndGray7
          ? `
            color: ${gray_8};
          `
          : `
            color: ${bgc};
          `
      }
      &:hover {
        ${
          isSameWithBgcAndGray1
            ? `
              background: ${gray_1};
            `
            : `
              background: ${bgc};
              color: #fff;
            `
        }
      }
      &:active {
        ${
          isSameWithBgcAndBlue5
            ? `
              background: ${blue_6};
            `
            : isSameWithBgcAndRed7
            ? `
              background: ${red_9};
            `
            : `
              background-color: ${darken(0.15, bgc)};
            `
        }
      }
    }
    &.textonly {
      background: transparent;
      ${
        isSameWithBgcAndGray1
          ? `
            color: ${gray_8};
          `
          : isSameWithBgcAndGray7
          ? `
            color: ${gray_8};
          `
          : `
            color: ${bgc};
          `
      }
      &:hover {
        text-decoration: underline;
      }
    }
  `;
};
