import React, { useState } from "react";
import Divider from "../component/Divider";
import Tag from "../component/Tag";

export default {
  title: "Component/Tag",
  component: Tag,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Tag>좋아요</Tag>
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <Tag variant="default">default</Tag>
    <Divider />
    <Tag variant="referral">referral</Tag>
  </div>
);

export const Size = () => (
  <div style={{ padding: 20 }}>
    <Tag size="sm">small (20px)</Tag>
    <Divider />
    <Tag size="md">medium (24px)</Tag>
    <Divider />
    <Tag size="lg">large (28px)</Tag>
    <Divider />
    <Tag size="sm" variant="referral">
      small (20px)
    </Tag>
    <Divider />
    <Tag size="lg" variant="referral">
      large (28px)
    </Tag>
  </div>
);

export const Close = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      {!open && (
        <Tag size="lg" onClickCloseBtn={() => setOpen(!open)} closeBtn>
          닫을 수 있어요
        </Tag>
      )}
    </div>
  );
};

export const Selected = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tag size="lg" onClick={() => setSelect(!select)} selected={!select}>
        선택됨
      </Tag>
      <Divider />
      {!open && (
        <Tag size="lg" onClickCloseBtn={() => setOpen(!open)} selected closeBtn>
          선택됨
        </Tag>
      )}
    </div>
  );
};
