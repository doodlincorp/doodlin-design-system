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
        <DropDown btn={<Button>option</Button>} placement="maxLeft">
          <DropItem text="hello 소환" />
          <DropItem text="아이콘과 함께" icon={<EditIcon />} />
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
      <div
        style={{
          width: 800,
          height: 600,
          backgroundColor: "aliceblue",
          position: "relative",
          overflow: "auto",
        }}
      >
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div
          style={{
            width: 640,
            height: 480,
            backgroundColor: "violet",
            position: "relative",
            overflow: "auto",
          }}
        >
          with portal
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <DropDown
            placement="maxRight"
            style={{ position: "absolute", right: 0 }}
            btn={<Button>나를 눌러!</Button>}
            usingPortalNode={true}
          >
            <DropItem text="hello 소환" />
            <DropItem className="delete" text="삭제" icon={"👩"} />
          </DropDown>
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
          <br />
          <br />
          <br />
          scrolling
        </div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
        <div>outer scrolling</div>
      </div>
    </>
  );
};

export const Size = () => {
  return (
    <>
      <div
        style={{
          padding: 20,
        }}
      >
        <DropDown width={200} placement="right" btn={<Button>200px</Button>}>
          <DropItem text="hello 소환" />
          <DropItem text="아이콘과 함께" icon={<EditIcon />} />
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
          padding: 20,
        }}
      >
        <DropDown width={400} placement="right" btn={<Button>400px</Button>}>
          <DropItem text="hello 소환" />
          <DropItem text="아이콘과 함께" icon={<EditIcon />} />
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
          padding: 20,
        }}
      >
        <DropDown width={600} placement="right" btn={<Button>600px</Button>}>
          <DropItem text="hello 소환" />
          <DropItem text="아이콘과 함께" icon={<EditIcon />} />
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
      <Divider />
      <div
        style={{
          padding: 20,
        }}
      >
        <DropDown placement="right" btn={<Button>xs</Button>}>
          <DropItem size="xs" text="hello 소환" />
          <DropItem size="xs" text="아이콘과 함께" icon={<EditIcon />} />
          <DropItem size="xs" text="로딩중" loading />
          <Divider />
          <DropItem size="xs" text="비활성화" icon={<SettingIcon />} disabled />
          <DropItem
            size="xs"
            className="delete"
            text="삭제"
            icon={<GarbageIcon />}
            variant="danger"
          />
          <DropItem size="xs" className="delete" text="삭제" icon={"👩"} />
        </DropDown>
      </div>
      <div
        style={{
          padding: 20,
        }}
      >
        <DropDown placement="right" btn={<Button>sm</Button>}>
          <DropItem size="sm" text="hello 소환" />
          <DropItem size="sm" text="아이콘과 함께" icon={<EditIcon />} />
          <DropItem size="sm" text="로딩중" loading />
          <Divider />
          <DropItem size="sm" text="비활성화" icon={<SettingIcon />} disabled />
          <DropItem
            size="sm"
            className="delete"
            text="삭제"
            icon={<GarbageIcon />}
            variant="danger"
          />
          <DropItem size="sm" className="delete" text="삭제" icon={"👩"} />
        </DropDown>
      </div>
    </>
  );
};
