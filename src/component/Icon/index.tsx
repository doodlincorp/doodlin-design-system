import { AddColumnIcon } from "./AddColumnIcon";
import { AlignIcon } from "./AlignIcon";
import { ApplicantListIcon } from "./ApplicantListIcon";
import { ArchiveIcon } from "./ArchiveIcon";
import { ArrowIcon } from "./ArrowIcon";
import { CalendarIcon } from "./CalendarIcon";
import { CameraIcon } from "./CameraIcon";
import { CheckIcon } from "./CheckIcon";
import { ChevronIcon } from "./ChevronIcon";
import { CircleCheckIcon } from "./CircleCheckIcon";
import { ClipIcon } from "./ClipIcon";
import { ClockIcon } from "./ClockIcon";
import { CloseIcon } from "./CloseIcon";
import { CopyIcon } from "./CopyIcon";
import { DefaultImageIcon } from "./DefaultImageIcon";
import { DepartmentManageIcon } from "./DepartmentManageIcon";
import { DocumentIcon } from "./DocumentIcon";
import { DownloadIcon } from "./DownloadIcon";
import { EditIcon } from "./EditIcon";
import { EllipsisIcon } from "./EllipsisIcon";
import { EmailIcon } from "./EmailIcon";
import { ExcelIcon } from "./ExcelIcon";
import { FileUploadIcon } from "./FileUploadIcon";
import { FilterIcon } from "./FilterIcon";
import { FolderDownloadIcon } from "./FolderDownloadIcon";
import { FolderIcon } from "./FolderIcon";
import { GarbageIcon } from "./GarbageIcon";
import { IDTypeIcon } from "./IDTypeIcon";
import { InfoMarkIcon } from "./InfoMarkIcon";
import { MapPinIcon } from "./MapPinIcon";
import { ModalCloseIcon } from "./ModalCloseIcon";
import { OpeningListIcon } from "./OpeningListIcon";
import PenIcon from "./PenIcon";
import { PhoneIcon } from "./PhoneIcon";
import { PlusIcon } from "./PlusIcon";
import { PopUpCloseBtnIcon } from "./PopUpCloseBtnIcon";
import { ProfileImageIcon } from "./ProfileImageIcon";
import { RefreshIcon } from "./RefreshIcon";
import { ReturnIcon } from "./ReturnIcon";
import { RejectIcon } from "./RejectIcon";
import { SearchIcon } from "./SearchIcon";
import SelectArrowIcon from "./SelectArrowIcon";
import { SendIcon } from "./SendIcon";
import { SettingIcon } from "./SettingIcon";
import { ThumbIcon } from "./ThumbIcon";
import { ZipDownloadIcon } from "./ZipDownloadIcon";
import { MailSendIcon } from "./MailSendIcon";

export interface IColorMap {
  [key: string]: string;
}

export const colorMap: IColorMap = {
  // Primary Color
  yellow_0: "#fff9db",
  yellow_1: "#fff3bf",
  yellow_2: "#ffec99",
  yellow_3: "#ffe066",
  yellow_4: "#ffd43b", // Primary
  yellow_5: "#fcc419",
  yellow_6: "#fab005", // Primary
  yellow_7: "#f59f00",
  yellow_8: "#f08c00",
  yellow_9: "#e67700",

  // Secondary Color
  blue_0: "#e7f5ff",
  blue_1: "#d0ebff",
  blue_2: "#a5d8ff",
  blue_3: "#74c0fc",
  blue_4: "#4dabf7",
  blue_5: "#339af0",
  blue_6: "#228be5",
  blue_7: "#1c7ed6",
  blue_8: "#1971c2",
  blue_9: "#1864ab",
  blue_10: "#0a467f",

  // Gray Color
  gray_0: "#f8f8f8",
  gray_1: "#f1f1f1",
  gray_2: "#e9e9e9",
  gray_3: "#e0e0e0",
  gray_4: "#d0d0d0",
  gray_5: "#b0b0b0",
  gray_6: "#8b8b8b",
  gray_7: "#555555",
  gray_8: "#333333",
  gray_9: "#111111",

  white: "#fff",
  red_7: "#f03e3e",
  red_8: "#e03131", // caution, error alert
  green_6: "#40c057", // success
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
  Chevron: ChevronIcon,
  CircleCheck: CircleCheckIcon,
  Clip: ClipIcon,
  Clock: ClockIcon,
  Close: CloseIcon,
  Copy: CopyIcon,
  DefaultImage: DefaultImageIcon,
  DepartmentManage: DepartmentManageIcon,
  Doc: DocumentIcon,
  Download: DownloadIcon,
  Edit: EditIcon,
  Ellipsis: EllipsisIcon,
  Email: EmailIcon,
  Excel: ExcelIcon,
  FileUpload: FileUploadIcon,
  Filter: FilterIcon,
  FolderDownload: FolderDownloadIcon,
  Folder: FolderIcon,
  Garbage: GarbageIcon,
  IDType: IDTypeIcon,
  InfoMark: InfoMarkIcon,
  MailSend: MailSendIcon,
  MapPin: MapPinIcon,
  ModalClose: ModalCloseIcon,
  OpeningList: OpeningListIcon,
  Pen: PenIcon,
  Phone: PhoneIcon,
  Plus: PlusIcon,
  PopUpCloseBtn: PopUpCloseBtnIcon,
  ProfileImage: ProfileImageIcon,
  Refresh: RefreshIcon,
  Reject: RejectIcon,
  Return: ReturnIcon,
  Search: SearchIcon,
  SelectArrow: SelectArrowIcon,
  Send: SendIcon,
  Setting: SettingIcon,
  Thumb: ThumbIcon,
  ZipDownload: ZipDownloadIcon,
};

export default Icon;
