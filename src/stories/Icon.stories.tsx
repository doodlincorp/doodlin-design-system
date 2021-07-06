import React from "react";
import { Text } from "..";
import Divider from "../component/Divider";
import StoriesIcon from "../component/Icon";
import "../reset.scss";

export default {
  title: "Component/Icon",
};

export const Default = () => {
  const IconBlock = ({ children, name, variantName }: any) => (
    <div
      style={{
        display: "inline-block",
        width: 120,
        height: "max-content",
        padding: 8,
        margin: 8,
        textAlign: "center",
        borderRadius: 6,
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.16)",
        overflow: "hidden",
        fontSize: 12,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 60,
          marginBottom: 6,
        }}
      >
        {children}
      </div>
      <Text size="xx-small">{name}</Text>
      <Divider />
      <Text size="xx-small" textColor="gray_6">
        variant:{" "}
      </Text>
      <Text size="xx-small" weight="medium" textColor="blue_6">
        {variantName ? (
          variantName
        ) : (
          <span style={{ color: "#8B8B8B" }}>-</span>
        )}
      </Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <div
        className="icon-table"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
          gridGap: "12",
        }}
      >
        <IconBlock name="AddColumnIcon">
          <StoriesIcon.AddColumn size={40} />
        </IconBlock>

        <IconBlock name="AlignIcon" variantName="kanban">
          <StoriesIcon.Align size={40} />
        </IconBlock>

        <IconBlock name="AlignIcon" variantName="list">
          <StoriesIcon.Align size={40} variant="list" />
        </IconBlock>

        <IconBlock name="ApplicnatListIcon">
          <StoriesIcon.ApplicantList size={40} />
        </IconBlock>

        <IconBlock name="ArchiveIcon">
          <StoriesIcon.Archive size={40} />
        </IconBlock>

        <IconBlock name="ArrowIcon" variantName="arrow">
          <StoriesIcon.Arrow size={40} variant="arrow" />
        </IconBlock>

        <IconBlock name="ArrowIcon" variantName="chevron">
          <StoriesIcon.Arrow size={40} />
        </IconBlock>

        <IconBlock name="ArrowIcon" variantName="chevron-alt">
          <StoriesIcon.Arrow size={40} variant="chevron-alt" />
        </IconBlock>

        <IconBlock name="ArrowIcon" variantName="solid">
          <StoriesIcon.Arrow size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="CalendarIcon" variantName="default">
          <StoriesIcon.Calendar size={40} />
        </IconBlock>

        <IconBlock name="CalendarIcon" variantName="check">
          <StoriesIcon.Calendar size={40} variant="check" />
        </IconBlock>

        <IconBlock name="CalendarIcon" variantName="x">
          <StoriesIcon.Calendar size={40} variant="x" />
        </IconBlock>

        <IconBlock name="CameraIcon" variantName="solid">
          <StoriesIcon.Camera size={40} />
        </IconBlock>

        <IconBlock name="CameraIcon" variantName="border">
          <StoriesIcon.Camera size={40} variant="border" />
        </IconBlock>

        <IconBlock name="ChartIcon" variantName="pie">
          <StoriesIcon.Chart size={40} variant="pie" />
        </IconBlock>

        <IconBlock name="ChartIcon" variantName="doughnut">
          <StoriesIcon.Chart size={40} variant="doughnut" />
        </IconBlock>

        <IconBlock name="ChartIcon" variantName="bar">
          <StoriesIcon.Chart size={40} variant="bar" />
        </IconBlock>

        <IconBlock name="CheckIcon" variantName="single">
          <StoriesIcon.Check size={40} />
        </IconBlock>

        <IconBlock name="CheckIcon" variantName="double">
          <StoriesIcon.Check size={40} variant="double" />
        </IconBlock>

        <IconBlock name="ClipIcon">
          <StoriesIcon.Clip size={40} />
        </IconBlock>

        <IconBlock name="ClockIcon" variantName="solid">
          <StoriesIcon.Clock size={40} />
        </IconBlock>

        <IconBlock name="ClockIcon" variantName="border">
          <StoriesIcon.Clock size={40} variant="border" />
        </IconBlock>

        <IconBlock name="ClockIcon" variantName="history">
          <StoriesIcon.Clock size={40} variant="history" />
        </IconBlock>

        <IconBlock name="CloseIcon" variantName="default">
          <StoriesIcon.Close size={40} />
        </IconBlock>

        <IconBlock name="CloseIcon" variantName="circle">
          <StoriesIcon.Close size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="CopyIcon" variantName="default">
          <StoriesIcon.Copy size={40} />
        </IconBlock>

        <IconBlock name="CopyIcon" variantName="alt">
          <StoriesIcon.Copy size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="DefaultImageIcon">
          <StoriesIcon.DefaultImage size={40} />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="solid">
          <StoriesIcon.Doc size={40} />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="border">
          <StoriesIcon.Doc size={40} variant="border" />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="blank">
          <StoriesIcon.Doc size={40} variant="blank" />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="plus">
          <StoriesIcon.Doc size={40} variant="plus" />
        </IconBlock>

        <IconBlock name="DownloadIcon" variantName="default">
          <StoriesIcon.Download size={40} />
        </IconBlock>

        <IconBlock name="DownloadIcon" variantName="upload">
          <StoriesIcon.Download size={40} variant="upload" />
        </IconBlock>

        <IconBlock name="EditIcon" variantName="default">
          <StoriesIcon.Edit size={40} />
        </IconBlock>

        <IconBlock name="EditIcon" variantName="box">
          <StoriesIcon.Edit size={40} variant="box" />
        </IconBlock>

        <IconBlock name="EllipsisIcon">
          <StoriesIcon.Ellipsis size={40} />
        </IconBlock>

        <IconBlock name="ExcelIcon">
          <StoriesIcon.Excel size={40} />
        </IconBlock>

        <IconBlock name="ErrorIcon">
          <StoriesIcon.Error size={40} />
        </IconBlock>

        <IconBlock name="FlieDriveIcon">
          <StoriesIcon.FileDrive size={40} />
        </IconBlock>

        <IconBlock name="FilterIcon" variantName="default">
          <StoriesIcon.Filter size={40} variant="default" />
        </IconBlock>

        <IconBlock name="FilterIcon" variantName="chevron">
          <StoriesIcon.Filter size={40} variant="chevron" />
        </IconBlock>

        <IconBlock name="FolderIcon">
          <StoriesIcon.Folder size={40} />
        </IconBlock>

        <IconBlock name="GarbageIcon" variantName="solid">
          <StoriesIcon.Garbage size={40} />
        </IconBlock>

        <IconBlock name="GarbageIcon" variantName="border">
          <StoriesIcon.Garbage size={40} variant="border" />
        </IconBlock>

        <IconBlock name="GridIcon" variantName="card">
          <StoriesIcon.Grid size={40} />
        </IconBlock>

        <IconBlock name="GridIcon" variantName="row">
          <StoriesIcon.Grid size={40} variant="row" />
        </IconBlock>

        <IconBlock name="InfoMarkIcon">
          <StoriesIcon.InfoMark size={40} />
        </IconBlock>

        <IconBlock name="LinkExternalIcon">
          <StoriesIcon.LinkExternal size={40} />
        </IconBlock>

        <IconBlock name="LinkIcon">
          <StoriesIcon.Link size={40} />
        </IconBlock>

        <IconBlock name="LogoutIcon">
          <StoriesIcon.Logout size={40} />
        </IconBlock>

        <IconBlock name="MailIcon" variantName="solid">
          <StoriesIcon.Mail size={40} />
        </IconBlock>

        <IconBlock name="MailIcon" variantName="border">
          <StoriesIcon.Mail size={40} variant="border" />
        </IconBlock>

        <IconBlock name="MailIcon" variantName="outgoing">
          <StoriesIcon.Mail size={40} variant="outgoing" />
        </IconBlock>

        <IconBlock name="MailIcon" variantName="incoming">
          <StoriesIcon.Mail size={40} variant="incoming" />
        </IconBlock>

        <IconBlock name="MapPinIcon" variantName="solid">
          <StoriesIcon.MapPin size={40} />
        </IconBlock>

        <IconBlock name="MapPinIcon" variantName="border">
          <StoriesIcon.MapPin size={40} variant="border" />
        </IconBlock>

        <IconBlock name="MemoIcon" variantName="default">
          <StoriesIcon.Memo size={40} />
        </IconBlock>

        <IconBlock name="MemoIcon" variantName="tail">
          <StoriesIcon.Memo size={40} variant="tail" />
        </IconBlock>

        <IconBlock name="PhoneIcon">
          <StoriesIcon.Phone size={40} />
        </IconBlock>

        <IconBlock name="PlusIcon" variantName="default">
          <StoriesIcon.Plus size={40} />
        </IconBlock>

        <IconBlock name="PlusIcon" variantName="circle">
          <StoriesIcon.Plus size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="QuestionMarkIcon" variantName="default">
          <StoriesIcon.QuestionMark size={40} />
        </IconBlock>

        <IconBlock name="QuestionMarkIcon" variantName="solid">
          <StoriesIcon.QuestionMark size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="QuestionMarkIcon" variantName="border">
          <StoriesIcon.QuestionMark size={40} variant="border" />
        </IconBlock>

        <IconBlock name="RefreshIcon">
          <StoriesIcon.Refresh size={40} />
        </IconBlock>

        <IconBlock name="RejectIcon">
          <StoriesIcon.Reject size={40} />
        </IconBlock>

        <IconBlock name="ReturnIcon">
          <StoriesIcon.Return size={40} />
        </IconBlock>

        <IconBlock name="SearchIcon">
          <StoriesIcon.Search size={40} />
        </IconBlock>

        <IconBlock name="SendIcon">
          <StoriesIcon.Send size={40} />
        </IconBlock>

        <IconBlock name="SettingIcon">
          <StoriesIcon.Setting size={40} />
        </IconBlock>

        <IconBlock name="SliderIcon" variantName="default">
          <StoriesIcon.Slider size={40} />
        </IconBlock>

        <IconBlock name="SliderIcon" variantName="alt">
          <StoriesIcon.Slider size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="TagIcon" variantName="solid">
          <StoriesIcon.Tag size={40} />
        </IconBlock>

        <IconBlock name="TagIcon" variantName="border">
          <StoriesIcon.Tag size={40} variant="border" />
        </IconBlock>

        <IconBlock name="ThumbIcon" variantName="sobad">
          <StoriesIcon.Thumb size={40} variant="sobad" />
        </IconBlock>

        <IconBlock name="ThumbIcon" variantName="good">
          <StoriesIcon.Thumb size={40} variant="good" />
        </IconBlock>

        <IconBlock name="UpDownArrowIcon">
          <StoriesIcon.UpDownArrow size={40} />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="general">
          <StoriesIcon.User size={40} variant="general" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="manager">
          <StoriesIcon.User size={40} variant="manager" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="owner">
          <StoriesIcon.User size={40} variant="owner" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="setMember">
          <StoriesIcon.User size={40} variant="setMember" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="evaluable">
          <StoriesIcon.User size={40} variant="evaluable" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="rejected">
          <StoriesIcon.User size={40} variant="rejected" />
        </IconBlock>

        <IconBlock name="UserIcon" variantName="all">
          <StoriesIcon.User size={40} variant="all" />
        </IconBlock>

        <IconBlock name="ZipDownloadIcon">
          <StoriesIcon.ZipDownload size={40} />
        </IconBlock>
      </div>
    </div>
  );
};

export const Rotate = () => {
  return (
    <div style={{ padding: 20 }}>
      <StoriesIcon.Arrow variant="arrow" size={40} rotate={90} color="red_7" />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow variant="arrow" size={40} rotate={45} color="green" />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow
        variant="arrow"
        size={40}
        rotate={320}
        color="blue_7"
      />
    </div>
  );
};

export const Flip = () => {
  return (
    <div style={{ padding: 20 }}>
      <StoriesIcon.AddColumn size={40} />
      <Divider variant="vertical" />
      <StoriesIcon.AddColumn size={40} flip />
    </div>
  );
};
