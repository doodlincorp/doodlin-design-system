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

export type TDefaultSize = "xs" | "sm" | "md" | "lg" | "xl";
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
