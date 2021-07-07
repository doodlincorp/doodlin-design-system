import { useState } from "@storybook/addons";
import React from "react";
import Toggle from "../component/Toggle";
import "../reset.scss";

export default {
  title: "Component/Toggle",
  component: Toggle,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Toggle onClick={() => setOpen(!open)} open={open} />
    </div>
  );
};

export const Disabled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Toggle onClick={() => setOpen(!open)} open={open} disabled />
    </div>
  );
};
