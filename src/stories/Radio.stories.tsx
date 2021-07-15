import { useState } from "@storybook/addons";
import React from "react";
import Divider from "../component/Divider";
import Radio from "../component/Radio";
import "../reset.scss";

export default {
  title: "Component/Radio",
  component: Radio,
};

export const Default = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Radio onClick={() => setSelected(!selected)} selected={selected} />
    </div>
  );
};

export const WithLabel = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Radio
        label="라디오 버튼"
        labelSize="small"
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
      <Radio
        label="default"
        labelSize="small"
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
      <Divider />
      <Radio
        label="red"
        labelSize="small"
        variant="red"
        onClick={() => setSelected(!selected)}
        selected={selected}
      />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div style={{ padding: 20 }}>
      <Radio label="비활성화된 라디오 버튼" labelSize="small" disabled />
    </div>
  );
};
