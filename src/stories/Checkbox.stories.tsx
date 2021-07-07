import { useState } from "@storybook/addons";
import React from "react";
import Checkbox from "../component/Checkbox";
import Divider from "../component/Divider";
import "../reset.scss";

export default {
  title: "Component/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Checkbox onClick={() => setSelected(!selected)} selected={selected} />
    </div>
  );
};

export const Size = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        size={16}
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
      <Divider />
      <Checkbox
        size={20}
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
      <Divider />
      <Checkbox
        size={24}
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
    </div>
  );
};

export const Variant = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Checkbox onClick={() => setSelected(!selected)} selected={selected} />
      <Divider />
      <Checkbox
        variant="circle"
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
    </div>
  );
};

export const WithLabel = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label="체크박스"
        labelSize="small"
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 20 }}>
      <Checkbox label="비활성화된 체크박스" labelSize="small" disabled />
    </div>
  );
};
