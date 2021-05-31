import React, { useState } from "react";
import Button from "../component/Button";
import { EditIcon } from "../component/Icon/EditIcon";
import { GarbageIcon } from "../component/Icon/GarbageIcon";
import { SettingIcon } from "../component/Icon/SettingIcon";
import Option from "../component/Option";
import { OptionItem } from "../component/Option/OptionItem";
import "../reset.scss";

export default {
  title: "Component/Option",
  component: Option,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        margin: 20,
        position: "relative",
        padding: 20,
        marginLeft: 200,
      }}
    >
      <Option btn={<Button>option</Button>}>
        <OptionItem
          text="hello 소환"
          onClick={() => setOpen(!open)}
        ></OptionItem>
        <OptionItem text="아이콘과 함께" icon={<EditIcon />}></OptionItem>
        <OptionItem text="로딩중" loading></OptionItem>
        <OptionItem
          text="비활성화"
          icon={<SettingIcon />}
          disabled
        ></OptionItem>
        <OptionItem
          className="delete"
          text="삭제"
          icon={<GarbageIcon />}
          variant="danger"
        ></OptionItem>
      </Option>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <Option btn={<Button>option</Button>} placement="right">
        <OptionItem
          text="hello 소환"
          onClick={() => setOpen(!open)}
        ></OptionItem>
        <OptionItem text="아이콘과 함께" icon={<EditIcon />}></OptionItem>
        <OptionItem text="로딩중" loading></OptionItem>
        <OptionItem
          text="비활성화"
          icon={<SettingIcon />}
          disabled
        ></OptionItem>
        <OptionItem
          className="delete"
          text="삭제"
          icon={<GarbageIcon />}
          variant="danger"
        ></OptionItem>
      </Option>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <br /> <br />
      {open && "/ hello! \\"}
    </div>
  );
};
