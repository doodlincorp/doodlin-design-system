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
import { EmailIcon } from "./EmailIcon";
import { ExcelIcon } from "./ExcelIcon";
import { FilterIcon } from "./FilterIcon";
import { GarbageIcon } from "./GarbageIcon";
import { InfoMarkIcon } from "./InfoMarkIcon";
import { MapPinIcon } from "./MapPinIcon";
import { OpeningListIcon } from "./OpeningListIcon";
import PenIcon from "./PenIcon";
import { PhoneIcon } from "./PhoneIcon";
import { PlusIcon } from "./PlusIcon";
import { RefreshIcon } from "./RefreshIcon";
import { ReturnIcon } from "./ReturnIcon";
import { RejectIcon } from "./RejectIcon";
import { RevisionIcon } from "./RevisionIcon";
import { SearchIcon } from "./SearchIcon";
import { SendIcon } from "./SendIcon";
import { SettingIcon } from "./SettingIcon";
import { ThumbIcon } from "./ThumbIcon";
import { ZipDownloadIcon } from "./ZipDownloadIcon";
import { MailSendIcon } from "./MailSendIcon";
import { LinkIcon } from "./LinkIcon";
import { LinkExternalIcon } from "./LinkExternalIcon";
import { MemoIcon } from "./MemoIcon";
import { PieChartIcon } from "./PieChartIcon";
import { QuestionMarkIcon } from "./QuestionMarkIcon";
import { FileDriveIcon } from "./FileDriveIcon";
import { TagIcon } from "./TagIcon";
import { UserIcon } from "./UserIcon";
import { LogoutIcon } from "./LogoutIcon";
import { UpDownArrowIcon } from "./UpDownArrow";

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
  Calendar: CalendarIcon,
  Camera: CameraIcon,
  Check: CheckIcon,
  Clip: ClipIcon,
  Clock: ClockIcon,
  Close: CloseIcon,
  Copy: CopyIcon,
  DefaultImage: DefaultImageIcon,
  Doc: DocIcon,
  FileDrive: FileDriveIcon,
  PieChart: PieChartIcon,
  QuestionMark: QuestionMarkIcon,
  Download: DownloadIcon,
  Edit: EditIcon,
  Ellipsis: EllipsisIcon,
  Email: EmailIcon,
  Excel: ExcelIcon,
  Filter: FilterIcon,
  Garbage: GarbageIcon,
  InfoMark: InfoMarkIcon,
  Logout: LogoutIcon,
  MailSend: MailSendIcon,
  MapPin: MapPinIcon,
  Memo: MemoIcon,
  OpeningList: OpeningListIcon,
  Pen: PenIcon,
  Phone: PhoneIcon,
  Plus: PlusIcon,
  Refresh: RefreshIcon,
  Reject: RejectIcon,
  Return: ReturnIcon,
  Revision: RevisionIcon,
  Search: SearchIcon,
  Send: SendIcon,
  Setting: SettingIcon,
  Slider: SliderIcon,
  Thumb: ThumbIcon,
  Tag: TagIcon,
  User: UserIcon,
  UpDownArrow: UpDownArrowIcon,
  ZipDownload: ZipDownloadIcon,
  Link: LinkIcon,
  LinkExternal: LinkExternalIcon,
};

export default Icon;
