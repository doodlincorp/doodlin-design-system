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
import { ImageIcon } from "./ImageIcon";
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
import { SideBarIcon } from "./SideBarIcon";
import { WindowIcon } from "./WindowIcon";
import { ClickModeIcon } from "./ClickModeIcon";
import { DockIcon } from "./DockIcon";
import { HeadsetIcon } from "./HeadsetIcon";
import { CoinIcon } from "./CoinIcon";
import { CreditCardIcon } from "./CreditCardIcon";
import { SixDotIcon } from "./SixDotIcon";
import { ReplyIcon } from "./ReplyIcon";
import { MegaphoneIcon } from "./MegaphoneIcon";
import { ShapeIcon } from "./ShapeIcon";
import { BookIcon } from "./BookIcon";
import { TemplateIcon } from "./TemplateIcon";
import { BellIcon } from "./BellIcon";
import { DeviceIcon } from "./DeviceIcon";
import { TextAlignIcon } from "./TextAlignIcon";
import { ShareIcon } from "./ShareIcon";
import { ShieldIcon } from "./ShieldIcon";
import { HeaderIcon } from "./HeaderIcon";
import { TextIcon } from "./TextIcon";
import { BoldIcon } from "./BoldIcon";
import { ItalicIcon } from "./ItalicIcon";
import { UnderlineIcon } from "./UnderlineIcon";
import { FontColorIcon } from "./FontColorIcon";
import { BannerIcon } from "./BannerIcon";
import { CardIcon } from "./CardIcon";
import { MenuIcon } from "./MenuIcon";
import { CarouselIcon } from "./CarouselIcon";
import { MinusIcon } from "./MinusIcon";
import { EarthIcon } from "./EarthIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { BlankIcon } from "./BlankIcon";
import { PublishIcon } from "./PublishIcon";
import { PlayIcon } from "./PlayIcon";
import { PauseIcon } from "./PauseIcon";
import { HeadingTextIcon } from "./HeadingTextIcon";
import { ButtonIcon } from "./ButtonIcon";

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
  ApplicantList: ApplicantListIcon,
  Archive: ArchiveIcon,
  Arrow: ArrowIcon,
  Banner: BannerIcon,
  Bell: BellIcon,
  Blank: BlankIcon,
  Bold: BoldIcon,
  Book: BookIcon,
  Button: ButtonIcon,
  Calendar: CalendarIcon,
  Camera: CameraIcon,
  Card: CardIcon,
  Carousel: CarouselIcon,
  Chart: ChartIcon,
  Check: CheckIcon,
  ClickMode: ClickModeIcon,
  Clip: ClipIcon,
  Clock: ClockIcon,
  Close: CloseIcon,
  Coin: CoinIcon,
  Copy: CopyIcon,
  CreditCard: CreditCardIcon,
  Device: DeviceIcon,
  Doc: DocIcon,
  Dock: DockIcon,
  Dot: DotIcon,
  FileDrive: FileDriveIcon,
  QuestionMark: QuestionMarkIcon,
  Download: DownloadIcon,
  Earth: EarthIcon,
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
  FontColor: FontColorIcon,
  Fullscreen: FullscreenIcon,
  Garbage: GarbageIcon,
  Grid: GridIcon,
  Header: HeaderIcon,
  HeadingText: HeadingTextIcon,
  Headset: HeadsetIcon,
  Image: ImageIcon,
  InfoMark: InfoMarkIcon,
  Italic: ItalicIcon,
  Lock: LockIcon,
  Logout: LogoutIcon,
  Mail: MailIcon,
  MapPin: MapPinIcon,
  Megaphone: MegaphoneIcon,
  Memo: MemoIcon,
  Menu: MenuIcon,
  Minus: MinusIcon,
  Pause: PauseIcon,
  Phone: PhoneIcon,
  Play: PlayIcon,
  Plus: PlusIcon,
  Publish: PublishIcon,
  Refresh: RefreshIcon,
  Reject: RejectIcon,
  Reply: ReplyIcon,
  Return: ReturnIcon,
  Search: SearchIcon,
  Send: SendIcon,
  Setting: SettingIcon,
  Shape: ShapeIcon,
  Share: ShareIcon,
  Shield: ShieldIcon,
  SideBar: SideBarIcon,
  SixDot: SixDotIcon,
  Slider: SliderIcon,
  Template: TemplateIcon,
  TextAlign: TextAlignIcon,
  Text: TextIcon,
  Thumb: ThumbIcon,
  Underline: UnderlineIcon,
  Tag: TagIcon,
  User: UserIcon,
  UpDownArrow: UpDownArrowIcon,
  Vision: VisionIcon,
  Youtube: YoutubeIcon,
  ZipDownload: ZipDownloadIcon,
  Link: LinkIcon,
  LinkExternal: LinkExternalIcon,
  Window: WindowIcon,
};

export default Icon;
