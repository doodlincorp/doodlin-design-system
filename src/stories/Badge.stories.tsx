import React from "react";
import Badge from "../component/Badge";
import Divider from "../component/Divider";

export default {
  title: "Component/Badge",
  component: Badge,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Badge number={2} />
    <Divider />
    <Badge number={24} />
    <Divider />
    <Badge number={124} />
  </div>
);
