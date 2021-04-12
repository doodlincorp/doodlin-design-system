import React from "react";
import Spinner from "../component/Spinner";
import "../reset.scss";
import "../component/Spinner/index.scss";

export default {
  title: "Component/Spinner",
  component: Spinner,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Spinner />
  </div>
);

export const Size = () => (
  <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
    <div style={{ marginRight: 20 }}>
      <Spinner size="xs" />
    </div>
    <div style={{ marginRight: 20 }}>
      <Spinner size="sm" />
    </div>
    <div style={{ marginRight: 20 }}>
      <Spinner size="md" />
    </div>
    <div style={{ marginRight: 20 }}>
      <Spinner size="lg" />
    </div>
    <div style={{ marginRight: 20 }}>
      <Spinner size="xl" />
    </div>
  </div>
);
