import React, { useEffect, useState } from "react";
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
        variant:
      </Text>
      <Text
        size="xx-small"
        weight="medium"
        lineHeight="narrow"
        textColor={EColorMap.blue_6}
      >
        {variantName ? (
          variantName
        ) : (
          <span style={{ color: "#8B8B8B" }}>-</span>
        )}
      </Text>
    </div>
  );

  const execFunc = (func, props) => {
    return func(props);
  };

  const IconList = {
    AddColumn: [""],
    Align: ["kanban", "list"],
    ApplicantList: [""],
    Archive: [""],
    Arrow: ["arrow", "chevron", "chevron-alt", "solid"],
    Banner: [""],
    Bell: [""],
    Blank: [""],
    Bold: [""],
    Book: [
      "solid",
      "border",
      "solid-add",
      "border-add",
      "solid-added",
      "border-added",
    ],
    Calendar: [
      "default",
      "check",
      "request",
      "change-request",
      "scheduled",
      "finish",
      "x",
      "edit",
    ],
    Camera: ["solid", "border"],
    Card: [""],
    Carousel: [""],
    Chart: ["pie", "doughnut", "bar"],
    Check: ["single", "double", "alt", "circle", "circle-ghost"],
    ClickMode: [""],
    Clip: [""],
    Clock: ["solid", "border", "history"],
    Close: ["default", "circle"],
    Coin: ["default", "disabled"],
    Copy: ["default", "alt"],
    CreditCard: [""],
    Device: ["pc", "mobile"],
    Doc: ["solid", "border", "blank", "plus"],
    Dock: [""],
    Dot: ["active", "active-internal", "inactive"],
    Download: ["default", "upload"],
    Earth: [""],
    Edit: ["default", "box"],
    Ellipsis: [""],
    Excel: [""],
    Extend: ["default", "alt", "shrink"],
    Extension: ["solid", "border"],
    Emoji: ["solid", "border", "add"],
    Error: ["triangle", "circle"],
    FlieDrive: [""],
    Filter: ["default", "chevron"],
    Flag: ["default", "alt"],
    Folder: ["solid", "solid-add", "border", "border-add"],
    FontColor: [""],
    Fullscreen: ["default", "exit"],
    Garbage: ["solid", "border"],
    Grid: ["card", "row"],
    Header: [""],
    HeadingText: [""],
    Headset: [""],
    Image: ["default", "add", "none"],
    InfoMark: ["border", "solid"],
    Italic: [""],
    LinkExternal: [""],
    Link: [""],
    Lock: ["solid-lock", "solid-unlock", "border-lock", "border-unlock"],
    Logout: [""],
    Mail: [
      "solid",
      "border",
      "outgoing",
      "incoming",
      "open",
      "reservation",
      "cancel",
    ],
    MapPin: ["solid", "border"],
    Megaphone: [""],
    Memo: ["default", "tail", "note"],
    Menu: ["default", "alt"],
    Minus: ["default", "circle"],
    Pause: [""],
    Phone: [""],
    Play: [""],
    Plus: ["default", "circle"],
    Publish: ["default", "put-out"],
    QuestionMark: ["default", "solid", "border"],
    Refresh: [""],
    Reject: [""],
    Reply: ["solid", "border"],
    Return: [""],
    Search: [""],
    Send: [""],
    Setting: [""],
    Shape: ["circle", "triangle", "x"],
    Share: ["linkedin", "facebook", "kakaotalk", "twitter"],
    Shield: ["check", "question", "virus"],
    SideBar: [""],
    SixDot: [""],
    Slider: ["default", "alt"],
    Tag: ["solid", "border"],
    Template: [""],
    TextAlign: ["left", "center", "right", "justify"],
    Text: [""],
    Thumb: ["sobad", "bad", "soso", "good", "sogood"],
    Underline: [""],
    UpDownArrow: [""],
    User: [
      "general",
      "manager",
      "owner",
      "team",
      "setMember",
      "evaluable",
      "rejected",
      "all",
    ],
    Vision: ["vision", "invision"],
    Window: ["maximize", "minimize"],
    Youtube: [""],
    ZipDownload: [""],
  };

  const [icons, setIcons] = useState<typeof IconBlock[]>();

  useEffect(() => {
    var a = [];
    Object.entries(StoriesIcon)
      .sort()
      .forEach((e) => {
        var name = e[0];
        var icon = e[1];

        var iconList: [] = IconList[name];

        console.log(iconList);

        if (iconList === undefined) {
        } else {
          iconList.forEach((variant) => {
            a.push(
              <IconBlock name={name} variantName={variant}>
                {execFunc(icon, { size: 40, variant: variant })}
              </IconBlock>,
            );
          });
        }
      });

    setIcons(a);
    return () => {};
  }, []);

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
        {icons}
      </div>
    </div>
  );
};

export const Rotate = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
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
    <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
      <StoriesIcon.AddColumn size={40} />
      <Divider variant="vertical" />
      <StoriesIcon.AddColumn size={40} flip />
    </div>
  );
};
