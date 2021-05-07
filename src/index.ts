import "./reset.scss";
import "./index.scss";
export { default as Button } from "./component/Button";
export { default as Input } from "./component/Input";
export { default as Spinner } from "./component/Spinner";
export { default as Text } from "./component/Text";
export { default as Textarea } from "./component/Textarea";
export { default as Modal } from "./component/Modal";
export { default as Tooltip } from "./component/Tooltip";
export { default as Icon, colorMap, IColorMap } from "./component/Icon";
export { default as CustomSelect } from "./component/CustomSelect";
export { default as Toggle } from "./component/Toggle";
export { default as Callout } from "./component/Callout";
export { CircleCheckIcon } from "./component/Icon/CircleCheckIcon";
export { DocumentIcon } from "./component/Icon/DocumentIcon";
export { ModalCloseIcon } from "./component/Icon/ModalCloseIcon";
export { PenIcon } from "./component/Icon/PenIcon";
export { RefreshIcon } from "./component/Icon/RefreshIcon";
export { SearchIcon } from "./component/Icon/SearchIcon";
export { SelectArrowIcon } from "./component/Icon/SelectArrowIcon";
export { PickerChevronIcon } from "./component/Icon/fitple_picker/PickerChevronIcon";
export { PickerDocumentIcon } from "./component/Icon/fitple_picker/PickerDocumentIcon";
export { PickerPlusIcon } from "./component/Icon/fitple_picker/PickerPlusIcon";
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
