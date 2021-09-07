import { AddColumnIcon } from "./AddColumnIcon";
import { AlignIcon } from "./AlignIcon";
import { ApplicantListIcon } from "./ApplicantListIcon";
import { ArchiveIcon } from "./ArchiveIcon";
import { ArrowIcon } from "./ArrowIcon";
import { CalendarIcon } from "./CalendarIcon";
import { CameraIcon } from "./CameraIcon";
import { CheckIcon } from "./CheckIcon";
import { ClipIcon } from "./ClipIcon";
import { ClockIcon } from "./ClockIcon";
import { CloseIcon } from "./CloseIcon";
import { CopyIcon } from "./CopyIcon";
import { DefaultImageIcon } from "./DefaultImageIcon";
import { SliderIcon } from "./SliderIcon";
import { DocIcon } from "./DocIcon";
import { DownloadIcon } from "./DownloadIcon";
import { EditIcon } from "./EditIcon";
import { EllipsisIcon } from "./EllipsisIcon";
import { MailIcon } from "./MailIcon";
import { ExcelIcon } from "./ExcelIcon";
import { FilterIcon } from "./FilterIcon";
import { GarbageIcon } from "./GarbageIcon";
import { InfoMarkIcon } from "./InfoMarkIcon";
import { MapPinIcon } from "./MapPinIcon";
import { PhoneIcon } from "./PhoneIcon";
import { PlusIcon } from "./PlusIcon";
import { RefreshIcon } from "./RefreshIcon";
import { ReturnIcon } from "./ReturnIcon";
import { RejectIcon } from "./RejectIcon";
import { SearchIcon } from "./SearchIcon";
import { SendIcon } from "./SendIcon";
import { SettingIcon } from "./SettingIcon";
import { ThumbIcon } from "./ThumbIcon";
import { ZipDownloadIcon } from "./ZipDownloadIcon";
import { LinkIcon } from "./LinkIcon";
import { LinkExternalIcon } from "./LinkExternalIcon";
import { MemoIcon } from "./MemoIcon";
import { QuestionMarkIcon } from "./QuestionMarkIcon";
import { FileDriveIcon } from "./FileDriveIcon";
import { TagIcon } from "./TagIcon";
import { UserIcon } from "./UserIcon";
import { LogoutIcon } from "./LogoutIcon";
import { UpDownArrowIcon } from "./UpDownArrow";
import { FolderIcon } from "./FolderIcon";
import { ErrorIcon } from "./ErrorIcon";
import { GridIcon } from "./GridIcon";
import { ChartIcon } from "./ChartIcon";
import { ExtensionIcon } from "./ExtensionIcon";
import { FlagIcon } from "./FlagIcon";
import { FullscreenIcon } from "./FullscreenIcon";
import { ExtendIcon } from "./ExtendIcon";
import { LockIcon } from "./LockIcon";
import { VisionIcon } from "./VisionIcon";
import { EmojiIcon } from "./EmojiIcon";
import { DotIcon } from "./DotIcon";
import { AllIcon } from "./AllIcon";
import { SideBarIcon } from "./SideBarIcon";
import { WindowIcon } from "./WindowIcon";
import { ClickModeIcon } from "./ClickModeIcon";
import { DockIcon } from "./DockIcon";
import { HeadsetIcon } from "./HeadsetIcon";
import { CoinIcon } from "./CoinIcon";
import { CreditCardIcon } from "./CreditCardIcon";
import { SixDotIcon } from "./SixDotIcon";
import { ReplyIcon } from "./ReplyIcon";

export interface IColorMap {
  [key: string]: string;
}

export const colorMap: IColorMap = {
  // Primary Blue
  blue_0: "#F3F9FF",
  blue_1: "#E6F2FF",
  blue_2: "#C5E1FF",
  blue_3: "#92C7FF",
  blue_4: "#5FACFF",
  blue_5: "#1184FF",
  blue_6: "#0C6CD3",
  blue_7: "#004C9E",
  blue_8: "#003267",

  // Gray
  white: "#fff",
  gray_0: "#F9F9FB",
  gray_1: "#EFEFF2",
  gray_2: "#EBEBEE",
  gray_3: "#E0E0E5",
  gray_4: "#CACACC",
  gray_5: "#B1B1B3",
  gray_6: "#767679",
  gray_7: "#444348",
  gray_8: "#15141A",
  blue_gray: "#8F8F9C",

  // System Color
  active_green: "#69DB7C",
  inactive_red: "#FF8787",
  warning_red_1: "#FFF0EE",
  warning_red_2: "#F8D0D1",

  // Green
  green: "#34C759",
  thumbs_green: "#40C057",
  text_green: "#00A21D",

  // Red
  red_5: "#FF6B6B",
  red_6: "#FA5252",
  red_7: "#F03E3E",
  red_8: "#E03131",
  red_9: "#C92A2A",
  red_10: "#A51111",

  // Orange
  orange_1: "#FFECE2",
  interview_orange_7: "#F38119",

  // Refferal Color
  referral_blue_1: "#E8EFF7",
  referral_blue_7: "#1864AB",
};

const Icon = {
  AddColumn: AddColumnIcon,
  Align: AlignIcon,
  All: AllIcon,
  ApplicantList: ApplicantListIcon,
  Archive: ArchiveIcon,
  Arrow: ArrowIcon,
  Calendar: CalendarIcon,
  Camera: CameraIcon,
  Chart: ChartIcon,
  Check: CheckIcon,
  ClickMode: ClickModeIcon,
  Clip: ClipIcon,
  Clock: ClockIcon,
  Close: CloseIcon,
  Coin: CoinIcon,
  Copy: CopyIcon,
  CreditCard: CreditCardIcon,
  DefaultImage: DefaultImageIcon,
  Doc: DocIcon,
  Dock: DockIcon,
  Dot: DotIcon,
  FileDrive: FileDriveIcon,
  QuestionMark: QuestionMarkIcon,
  Download: DownloadIcon,
  Edit: EditIcon,
  Ellipsis: EllipsisIcon,
  Emoji: EmojiIcon,
  Error: ErrorIcon,
  Excel: ExcelIcon,
  Extend: ExtendIcon,
  Extension: ExtensionIcon,
  Filter: FilterIcon,
  Flag: FlagIcon,
  Folder: FolderIcon,
  Fullscreen: FullscreenIcon,
  Garbage: GarbageIcon,
  Grid: GridIcon,
  Headset: HeadsetIcon,
  InfoMark: InfoMarkIcon,
  Lock: LockIcon,
  Logout: LogoutIcon,
  Mail: MailIcon,
  MapPin: MapPinIcon,
  Memo: MemoIcon,
  Phone: PhoneIcon,
  Plus: PlusIcon,
  Refresh: RefreshIcon,
  Reject: RejectIcon,
  Reply: ReplyIcon,
  Return: ReturnIcon,
  Search: SearchIcon,
  Send: SendIcon,
  Setting: SettingIcon,
  SideBar: SideBarIcon,
  SixDot: SixDotIcon,
  Slider: SliderIcon,
  Thumb: ThumbIcon,
  Tag: TagIcon,
  User: UserIcon,
  UpDownArrow: UpDownArrowIcon,
  Vision: VisionIcon,
  ZipDownload: ZipDownloadIcon,
  Link: LinkIcon,
  LinkExternal: LinkExternalIcon,
  Window: WindowIcon,
};

export default Icon;
