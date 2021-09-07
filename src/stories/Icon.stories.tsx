import React from "react";
import { Text } from "..";
import Divider from "../component/Divider";
import StoriesIcon from "../component/Icon";
import "../reset.scss";
import { EColorMap } from "../utils/colorMap";

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
      <Text size="xx-small" textColor={EColorMap.gray_6}>
        variant:{" "}
      </Text>
      <Text size="xx-small" weight="medium" textColor={EColorMap.blue_6}>
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
        <IconBlock name="AddColumn">
          <StoriesIcon.AddColumn size={40} />
        </IconBlock>

        <IconBlock name="Align" variantName="kanban">
          <StoriesIcon.Align size={40} />
        </IconBlock>

        <IconBlock name="Align" variantName="list">
          <StoriesIcon.Align size={40} variant="list" />
        </IconBlock>

        <IconBlock name="All">
          <StoriesIcon.All size={40} />
        </IconBlock>

        <IconBlock name="ApplicnatList">
          <StoriesIcon.ApplicantList size={40} />
        </IconBlock>

        <IconBlock name="Archive">
          <StoriesIcon.Archive size={40} />
        </IconBlock>

        <IconBlock name="Arrow" variantName="arrow">
          <StoriesIcon.Arrow size={40} variant="arrow" />
        </IconBlock>

        <IconBlock name="Arrow" variantName="chevron">
          <StoriesIcon.Arrow size={40} />
        </IconBlock>

        <IconBlock name="Arrow" variantName="chevron-alt">
          <StoriesIcon.Arrow size={40} variant="chevron-alt" />
        </IconBlock>

        <IconBlock name="Arrow" variantName="solid">
          <StoriesIcon.Arrow size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="Calendar" variantName="default">
          <StoriesIcon.Calendar size={40} />
        </IconBlock>

        <IconBlock name="Calendar" variantName="check">
          <StoriesIcon.Calendar size={40} variant="check" />
        </IconBlock>

        <IconBlock name="Calendar" variantName="x">
          <StoriesIcon.Calendar size={40} variant="x" />
        </IconBlock>

        <IconBlock name="Camera" variantName="solid">
          <StoriesIcon.Camera size={40} />
        </IconBlock>

        <IconBlock name="Camera" variantName="border">
          <StoriesIcon.Camera size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Chart" variantName="pie">
          <StoriesIcon.Chart size={40} variant="pie" />
        </IconBlock>

        <IconBlock name="Chart" variantName="doughnut">
          <StoriesIcon.Chart size={40} variant="doughnut" />
        </IconBlock>

        <IconBlock name="Chart" variantName="bar">
          <StoriesIcon.Chart size={40} variant="bar" />
        </IconBlock>

        <IconBlock name="Check" variantName="single">
          <StoriesIcon.Check size={40} />
        </IconBlock>

        <IconBlock name="Check" variantName="double">
          <StoriesIcon.Check size={40} variant="double" />
        </IconBlock>

        <IconBlock name="Check" variantName="alt">
          <StoriesIcon.Check size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="Check" variantName="circle">
          <StoriesIcon.Check size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="ClickMode">
          <StoriesIcon.ClickMode size={40} />
        </IconBlock>

        <IconBlock name="Clip">
          <StoriesIcon.Clip size={40} />
        </IconBlock>

        <IconBlock name="Clock" variantName="solid">
          <StoriesIcon.Clock size={40} />
        </IconBlock>

        <IconBlock name="Clock" variantName="border">
          <StoriesIcon.Clock size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Clock" variantName="history">
          <StoriesIcon.Clock size={40} variant="history" />
        </IconBlock>

        <IconBlock name="Close" variantName="default">
          <StoriesIcon.Close size={40} />
        </IconBlock>

        <IconBlock name="Close" variantName="circle">
          <StoriesIcon.Close size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="Coin" variantName="default">
          <StoriesIcon.Coin size={40} variant="default" />
        </IconBlock>

        <IconBlock name="Coin" variantName="disabled">
          <StoriesIcon.Coin size={40} variant="disabled" />
        </IconBlock>

        <IconBlock name="Copy" variantName="default">
          <StoriesIcon.Copy size={40} />
        </IconBlock>

        <IconBlock name="Copy" variantName="alt">
          <StoriesIcon.Copy size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="CreditCard">
          <StoriesIcon.CreditCard size={40} />
        </IconBlock>

        <IconBlock name="DefaultImage">
          <StoriesIcon.DefaultImage size={40} />
        </IconBlock>

        <IconBlock name="Doc" variantName="solid">
          <StoriesIcon.Doc size={40} />
        </IconBlock>

        <IconBlock name="Doc" variantName="border">
          <StoriesIcon.Doc size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Doc" variantName="blank">
          <StoriesIcon.Doc size={40} variant="blank" />
        </IconBlock>

        <IconBlock name="Doc" variantName="plus">
          <StoriesIcon.Doc size={40} variant="plus" />
        </IconBlock>

        <IconBlock name="Dock">
          <StoriesIcon.Dock size={40} />
        </IconBlock>

        <IconBlock name="Dot" variantName="active">
          <StoriesIcon.Dot size={40} />
        </IconBlock>

        <IconBlock name="Dot" variantName="inactive">
          <StoriesIcon.Dot size={40} variant="inactive" />
        </IconBlock>

        <IconBlock name="Download" variantName="default">
          <StoriesIcon.Download size={40} />
        </IconBlock>

        <IconBlock name="Download" variantName="upload">
          <StoriesIcon.Download size={40} variant="upload" />
        </IconBlock>

        <IconBlock name="Edit" variantName="default">
          <StoriesIcon.Edit size={40} />
        </IconBlock>

        <IconBlock name="Edit" variantName="box">
          <StoriesIcon.Edit size={40} variant="box" />
        </IconBlock>

        <IconBlock name="Ellipsis">
          <StoriesIcon.Ellipsis size={40} />
        </IconBlock>

        <IconBlock name="Excel">
          <StoriesIcon.Excel size={40} />
        </IconBlock>

        <IconBlock name="Extend" variantName="default">
          <StoriesIcon.Extend size={40} />
        </IconBlock>

        <IconBlock name="Extend" variantName="alt">
          <StoriesIcon.Extend size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="Extend" variantName="shrink">
          <StoriesIcon.Extend size={40} variant="shrink" />
        </IconBlock>

        <IconBlock name="Extension" variantName="solid">
          <StoriesIcon.Extension size={40} />
        </IconBlock>

        <IconBlock name="Extension" variantName="border">
          <StoriesIcon.Extension size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Emoji" variantName="solid">
          <StoriesIcon.Emoji size={40} />
        </IconBlock>

        <IconBlock name="Emoji" variantName="border">
          <StoriesIcon.Emoji size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Emoji" variantName="add">
          <StoriesIcon.Emoji size={40} variant="add" />
        </IconBlock>

        <IconBlock name="Error" variantName="triangle">
          <StoriesIcon.Error size={40} />
        </IconBlock>

        <IconBlock name="Error" variantName="circle">
          <StoriesIcon.Error size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="FlieDrive">
          <StoriesIcon.FileDrive size={40} />
        </IconBlock>

        <IconBlock name="Filter" variantName="default">
          <StoriesIcon.Filter size={40} variant="default" />
        </IconBlock>

        <IconBlock name="Filter" variantName="chevron">
          <StoriesIcon.Filter size={40} variant="chevron" />
        </IconBlock>

        <IconBlock name="Flag" variantName="default">
          <StoriesIcon.Flag size={40} />
        </IconBlock>

        <IconBlock name="Flag" variantName="alt">
          <StoriesIcon.Flag size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="Folder">
          <StoriesIcon.Folder size={40} />
        </IconBlock>

        <IconBlock name="Fullscreen" variantName="default">
          <StoriesIcon.Fullscreen size={40} />
        </IconBlock>

        <IconBlock name="Fullscreen" variantName="exit">
          <StoriesIcon.Fullscreen size={40} variant="exit" />
        </IconBlock>

        <IconBlock name="Garbage" variantName="solid">
          <StoriesIcon.Garbage size={40} />
        </IconBlock>

        <IconBlock name="Garbage" variantName="border">
          <StoriesIcon.Garbage size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Grid" variantName="card">
          <StoriesIcon.Grid size={40} />
        </IconBlock>

        <IconBlock name="Grid" variantName="row">
          <StoriesIcon.Grid size={40} variant="row" />
        </IconBlock>

        <IconBlock name="Headset">
          <StoriesIcon.Headset size={40} />
        </IconBlock>

        <IconBlock name="InfoMark" variantName="border">
          <StoriesIcon.InfoMark size={40} />
        </IconBlock>

        <IconBlock name="InfoMark" variantName="solid">
          <StoriesIcon.InfoMark size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="LinkExternal">
          <StoriesIcon.LinkExternal size={40} />
        </IconBlock>

        <IconBlock name="Link">
          <StoriesIcon.Link size={40} />
        </IconBlock>

        <IconBlock name="Lock" variantName="solid-lock">
          <StoriesIcon.Lock size={40} variant="solid-lock" />
        </IconBlock>

        <IconBlock name="Lock" variantName="solid-unlock">
          <StoriesIcon.Lock size={40} variant="solid-unlock" />
        </IconBlock>

        <IconBlock name="Lock" variantName="border-lock">
          <StoriesIcon.Lock size={40} variant="border-lock" />
        </IconBlock>

        <IconBlock name="Lock" variantName="border-unlock">
          <StoriesIcon.Lock size={40} variant="border-unlock" />
        </IconBlock>

        <IconBlock name="Logout">
          <StoriesIcon.Logout size={40} />
        </IconBlock>

        <IconBlock name="Mail" variantName="solid">
          <StoriesIcon.Mail size={40} />
        </IconBlock>

        <IconBlock name="Mail" variantName="border">
          <StoriesIcon.Mail size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Mail" variantName="outgoing">
          <StoriesIcon.Mail size={40} variant="outgoing" />
        </IconBlock>

        <IconBlock name="Mail" variantName="incoming">
          <StoriesIcon.Mail size={40} variant="incoming" />
        </IconBlock>

        <IconBlock name="MapPin" variantName="solid">
          <StoriesIcon.MapPin size={40} />
        </IconBlock>

        <IconBlock name="MapPin" variantName="border">
          <StoriesIcon.MapPin size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Memo" variantName="default">
          <StoriesIcon.Memo size={40} />
        </IconBlock>

        <IconBlock name="Memo" variantName="tail">
          <StoriesIcon.Memo size={40} variant="tail" />
        </IconBlock>

        <IconBlock name="Memo" variantName="note">
          <StoriesIcon.Memo size={40} variant="note" />
        </IconBlock>

        <IconBlock name="Phone">
          <StoriesIcon.Phone size={40} />
        </IconBlock>

        <IconBlock name="Plus" variantName="default">
          <StoriesIcon.Plus size={40} />
        </IconBlock>

        <IconBlock name="Plus" variantName="circle">
          <StoriesIcon.Plus size={40} variant="circle" />
        </IconBlock>

        <IconBlock name="QuestionMark" variantName="default">
          <StoriesIcon.QuestionMark size={40} />
        </IconBlock>

        <IconBlock name="QuestionMark" variantName="solid">
          <StoriesIcon.QuestionMark size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="QuestionMark" variantName="border">
          <StoriesIcon.QuestionMark size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Refresh">
          <StoriesIcon.Refresh size={40} />
        </IconBlock>

        <IconBlock name="Reject">
          <StoriesIcon.Reject size={40} />
        </IconBlock>

        <IconBlock name="Reply" variantName="solid">
          <StoriesIcon.Reply size={40} variant="solid" />
        </IconBlock>

        <IconBlock name="Reply" variantName="border">
          <StoriesIcon.Reply size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Return">
          <StoriesIcon.Return size={40} />
        </IconBlock>

        <IconBlock name="Search">
          <StoriesIcon.Search size={40} />
        </IconBlock>

        <IconBlock name="Send">
          <StoriesIcon.Send size={40} />
        </IconBlock>

        <IconBlock name="Setting">
          <StoriesIcon.Setting size={40} />
        </IconBlock>

        <IconBlock name="SideBar">
          <StoriesIcon.SideBar size={40} />
        </IconBlock>

        <IconBlock name="SixDot">
          <StoriesIcon.SixDot size={40} />
        </IconBlock>

        <IconBlock name="Slider" variantName="default">
          <StoriesIcon.Slider size={40} />
        </IconBlock>

        <IconBlock name="Slider" variantName="alt">
          <StoriesIcon.Slider size={40} variant="alt" />
        </IconBlock>

        <IconBlock name="Tag" variantName="solid">
          <StoriesIcon.Tag size={40} />
        </IconBlock>

        <IconBlock name="Tag" variantName="border">
          <StoriesIcon.Tag size={40} variant="border" />
        </IconBlock>

        <IconBlock name="Thumb" variantName="sobad">
          <StoriesIcon.Thumb size={40} variant="sobad" />
        </IconBlock>

        <IconBlock name="Thumb" variantName="bad">
          <StoriesIcon.Thumb size={40} variant="bad" />
        </IconBlock>

        <IconBlock name="Thumb" variantName="soso">
          <StoriesIcon.Thumb size={40} variant="soso" />
        </IconBlock>

        <IconBlock name="Thumb" variantName="good">
          <StoriesIcon.Thumb size={40} variant="good" />
        </IconBlock>

        <IconBlock name="Thumb" variantName="sogood">
          <StoriesIcon.Thumb size={40} variant="sogood" />
        </IconBlock>

        <IconBlock name="UpDownArrow">
          <StoriesIcon.UpDownArrow size={40} />
        </IconBlock>

        <IconBlock name="User" variantName="general">
          <StoriesIcon.User size={40} variant="general" />
        </IconBlock>

        <IconBlock name="User" variantName="manager">
          <StoriesIcon.User size={40} variant="manager" />
        </IconBlock>

        <IconBlock name="User" variantName="owner">
          <StoriesIcon.User size={40} variant="owner" />
        </IconBlock>

        <IconBlock name="User" variantName="team">
          <StoriesIcon.User size={40} variant="team" />
        </IconBlock>

        <IconBlock name="User" variantName="setMember">
          <StoriesIcon.User size={40} variant="setMember" />
        </IconBlock>

        <IconBlock name="User" variantName="evaluable">
          <StoriesIcon.User size={40} variant="evaluable" />
        </IconBlock>

        <IconBlock name="User" variantName="rejected">
          <StoriesIcon.User size={40} variant="rejected" />
        </IconBlock>

        <IconBlock name="User" variantName="all">
          <StoriesIcon.User size={40} variant="all" />
        </IconBlock>

        <IconBlock name="Vision" variantName="vision">
          <StoriesIcon.Vision size={40} variant="vision" />
        </IconBlock>

        <IconBlock name="Vision" variantName="invision">
          <StoriesIcon.Vision size={40} variant="invision" />
        </IconBlock>

        <IconBlock name="Window" variantName="maximize">
          <StoriesIcon.Window size={40} variant="maximize" />
        </IconBlock>

        <IconBlock name="Window" variantName="minimize">
          <StoriesIcon.Window size={40} variant="minimize" />
        </IconBlock>

        <IconBlock name="ZipDownload">
          <StoriesIcon.ZipDownload size={40} />
        </IconBlock>
      </div>
    </div>
  );
};

export const Rotate = () => {
  return (
    <div style={{ padding: 20 }}>
      <StoriesIcon.Arrow
        variant="arrow"
        size={40}
        rotate={90}
        color={EColorMap.red_7}
      />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow
        variant="arrow"
        size={40}
        rotate={45}
        color={EColorMap.green}
      />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow
        variant="arrow"
        size={40}
        rotate={320}
        color={EColorMap.blue_7}
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
