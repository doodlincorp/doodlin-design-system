import React, { useState } from "react";
import Button from "../component/Button";
import Divider from "../component/Divider";
import { EditIcon } from "../component/Icon/EditIcon";
import { GarbageIcon } from "../component/Icon/GarbageIcon";
import { SettingIcon } from "../component/Icon/SettingIcon";
import DropDown from "../component/DropDown";
import DropItem from "../component/DropDown/DropItem";

export default {
  title: "Component/DropDown",
  component: DropDown,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          margin: 20,
          position: "relative",
          padding: 20,
          marginLeft: 200,
        }}
      >
        <DropDown btn={<Button>option</Button>}>
          <DropItem text="hello 소환" />
          <DropItem
            text="아이콘과 함께아이콘과 함께아이콘과 함께"
            icon={<EditIcon />}
          />
          <DropItem text="로딩중" loading />
          <Divider />
          <DropItem text="비활성화" icon={<SettingIcon />} disabled />
          <DropItem
            className="delete"
            text="삭제"
            icon={<GarbageIcon />}
            variant="danger"
          />
          <DropItem className="delete" text="삭제" icon={"👩"} />
        </DropDown>
      </div>
      <div
        style={{
          margin: 20,
          position: "relative",
          padding: 20,
          marginLeft: 200,
        }}
      >
        <DropDown
          btn={
            <Button onClick={() => setOpen((b) => !b)}>
              open controlled component
            </Button>
          }
          open={open}
        >
          <DropItem text="닫기" onClick={() => setOpen(false)} />
        </DropDown>
      </div>
    </>
  );
};
