import "./reset.scss";
import "./index.scss";
export { default as Button } from "./component/Button";
export { default as Input } from "./component/Input";
export { default as Spinner } from "./component/Spinner";
export { default as Text } from "./component/Text";
export { default as Skeleton } from "./component/Skeleton";
export { default as Textarea } from "./component/Textarea";
export { default as Modal } from "./component/Modal";
export { default as Tooltip } from "./component/Tooltip";
export { default as Icon } from "./component/Icon";
export { default as CustomSelect } from "./component/CustomSelect";
export { default as SelectBox } from "./component/SelectBox";
export { default as Toggle } from "./component/Toggle";
export { default as Callout } from "./component/Callout";
export { default as DropDown } from "./component/DropDown";
export { default as DropItem } from "./component/DropDown/DropItem";
export { default as Divider } from "./component/Divider";
export { default as Tab } from "./component/Tab";
export { default as TabItem } from "./component/Tab/TabItem";
export { default as Radio } from "./component/Radio";
export { default as Checkbox } from "./component/Checkbox";
export { default as Avatar } from "./component/Avatar";
export { default as Tag } from "./component/Tag";
export { default as Badge } from "./component/Badge";

export * from "./utils/colorGenerate";
export * from "./utils/colorMap";
export * from "./utils/font";
export * from "./utils/getCssText";

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

// Spacer
export const spacer_xx_small = `0.4rem`;
export const spacer_x_small = `0.8rem`;
export const spacer_small = `1.2rem`;
export const spacer_medium = `1.6rem`;
export const spacer_large = `2rem`;
export const spacer_x_large = `2.8rem`;
export const spacer_xx_large = `6rem`;

// Transition Variables
export const button_hover_transition = `ease-out 0.1s`;

// Mixin
// * $WH: Width, height value (e.g. 160px)
// * $Bsize: border-size value (e.g. 3px)
// * $Bc0: border-color value (e.g. #fff)
// * $Bc1: border-background-color value (e.g. #ffffff33)
export const CustomSpin = (
  WH = `16px`,
  Bsize = `3px`,
  Bc0 = `#fff`,
  Bc1 = `rgba(255, 255, 255, 0.2)`
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
