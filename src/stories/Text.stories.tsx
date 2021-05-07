import React from "react";
import Text from "../component/Text";
import "../reset.scss";

export default {
  title: "Component/Text",
  component: Text,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>안녕하세요 핏플입니다.</Text>
    </div>
  );
};
