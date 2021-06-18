import React from "react";
import Text from "../component/Text";
import "../reset.scss";
import "../index.scss";

export default {
  title: "Introduction/Styleguide",
};

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div
      style={{
        display: "inline-block",
        width: 150,
        height: 190,
        marginTop: 8,
        marginRight: 10,
        textAlign: "center",
        borderRadius: 4,
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        overflow: "hidden",
        fontSize: 12,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 130,
          backgroundColor: color,
          marginBottom: 6,
        }}
      />

      <Text
        size="small"
        weight="medium"
        variant="block"
        style={{ padding: "4px 0" }}
      >
        {name}
      </Text>
      <Text size="xx-small" weight="regular" color="#8B8B8B">
        {color}
      </Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <Text>Yellow</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="Yellow_0" color="#fff9db" />
        <Palette name="Yellow_1" color="#fff3bf" />
        <Palette name="Yellow_2" color="#ffec99" />
        <Palette name="Yellow_3" color="#ffe066" />
        <Palette name="Yellow_4" color="#ffd43b" />
        <Palette name="Yellow_5" color="#fcc419" />
        <Palette name="Yellow_6" color="#fab005" />
        <Palette name="Yellow_7" color="#f59f00" />
        <Palette name="Yellow_8" color="#f08c00" />
        <Palette name="Yellow_9" color="#e67700" />
      </div>

      <Text>Warm Gray</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="Gray_0" color="#f8f8f8" />
        <Palette name="Gray_1" color="#f1f1f1" />
        <Palette name="Gray_2" color="#e9e9e9" />
        <Palette name="Gray_3" color="#e0e0e0" />
        <Palette name="Gray_4" color="#d0d0d0" />
        <Palette name="Gray_5" color="#b0b0b0" />
        <Palette name="Gray_6" color="#8b8b8b" />
        <Palette name="Gray_7" color="#555555" />
        <Palette name="Gray_8" color="#333333" />
        <Palette name="Gray_9" color="#111111" />
      </div>
    </div>
  );
};

export const Spacing = () => <div>【ツ】</div>;
