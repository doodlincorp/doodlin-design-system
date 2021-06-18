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
      <Text size="xx-small" style={{ color: "#8B8B8B" }}>
        variant:{" "}
      </Text>
      <Text size="xx-small" weight="medium">
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

        <IconBlock name="CameraIcon">
          <StoriesIcon.Camera size={40} />
        </IconBlock>

        <IconBlock name="CheckIcon" variantName="single">
          <StoriesIcon.Check size={40} />
        </IconBlock>

        <IconBlock name="CheckIcon" variantName="double">
          <StoriesIcon.Check size={40} variant="double" />
        </IconBlock>

        <IconBlock name="ClipIcon">
          <StoriesIcon.Clip size={40} rotate={315} />
        </IconBlock>

        <IconBlock name="ClockIcon">
          <StoriesIcon.Clock size={40} />
        </IconBlock>

        <IconBlock name="CloseIcon">
          <StoriesIcon.Close size={40} />
        </IconBlock>

        <IconBlock name="CopyIcon">
          <StoriesIcon.Copy size={40} />
        </IconBlock>

        <IconBlock name="DefaultImageIcon">
          <StoriesIcon.DefaultImage size={40} />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="default">
          <StoriesIcon.Doc size={40} />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="blank">
          <StoriesIcon.Doc size={40} variant="blank" />
        </IconBlock>

        <IconBlock name="DocIcon" variantName="plus">
          <StoriesIcon.Doc size={40} variant="plus" />
        </IconBlock>

        <IconBlock name="DownloadIcon">
          <StoriesIcon.Download size={40} />
        </IconBlock>

        <IconBlock name="EditIcon">
          <StoriesIcon.Edit size={40} />
        </IconBlock>

        <IconBlock name="EllipsisIcon">
          <StoriesIcon.Ellipsis size={40} />
        </IconBlock>

        <IconBlock name="EmailIcon" variantName="solid">
          <StoriesIcon.Email size={40} />
        </IconBlock>

        <IconBlock name="EmailIcon" variantName="border">
          <StoriesIcon.Email size={40} variant="border" />
        </IconBlock>

        <IconBlock name="EvaluationsTabIcon">
          <StoriesIcon.EvaluationsTab size={40} />
        </IconBlock>

        <IconBlock name="ExcelIcon">
          <StoriesIcon.Excel size={40} />
        </IconBlock>

        <IconBlock name="FlieDriveIcon">
          <StoriesIcon.FileDrive size={40} />
        </IconBlock>

        <IconBlock name="FilterIcon">
          <StoriesIcon.Filter size={40} />
        </IconBlock>

        <IconBlock name="GarbageIcon" variantName="solid">
          <StoriesIcon.Garbage size={40} />
        </IconBlock>

        <IconBlock name="GarbageIcon" variantName="border">
          <StoriesIcon.Garbage size={40} variant="border" />
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

        <IconBlock name="MailSendIcon" variantName="send">
          <StoriesIcon.MailSend size={40} />
        </IconBlock>

        <IconBlock name="MailSendIcon" variantName="receive">
          <StoriesIcon.MailSend size={40} variant="receive" />
        </IconBlock>

        <IconBlock name="MapPinIcon">
          <StoriesIcon.MapPin size={40} />
        </IconBlock>

        <IconBlock name="MemoIcon" variantName="default">
          <StoriesIcon.Memo size={40} />
        </IconBlock>

        <IconBlock name="MemoIcon" variantName="quick">
          <StoriesIcon.Memo size={40} variant="quick" />
        </IconBlock>

        <IconBlock name="OpeningListIcon">
          <StoriesIcon.OpeningList size={40} />
        </IconBlock>

        <IconBlock name="PenIcon">
          <StoriesIcon.Pen size={40} />
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

        <IconBlock name="PlusIcon" variantName="square">
          <StoriesIcon.Plus size={40} variant="square" />
        </IconBlock>

        <IconBlock name="QuestionMarkIcon">
          <StoriesIcon.QuestionMark size={40} />
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

        <IconBlock name="ReturnIcon">
          <StoriesIcon.Revision size={40} />
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

        <IconBlock name="SliderIcon">
          <StoriesIcon.Slider size={40} />
        </IconBlock>

        <IconBlock name="UpDownArrowIcon">
          <StoriesIcon.UpDownArrow size={40} />
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
      <StoriesIcon.Arrow
        variant="arrow"
        size={40}
        rotate={45}
        color="green_6"
      />
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
