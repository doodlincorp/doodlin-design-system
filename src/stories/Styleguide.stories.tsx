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
      <Text>Primary Blue</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="blue_0" color="#F3F9FF" />
        <Palette name="blue_1" color="#E6F2FF" />
        <Palette name="blue_2" color="#C5E1FF" />
        <Palette name="blue_3" color="#92C7FF" />
        <Palette name="blue_4" color="#5FACFF" />
        <Palette name="blue_5" color="#1184FF" /> 
        <Palette name="blue_6" color="#0C6CD3" />
        <Palette name="blue_7" color="#004C9E" />
        <Palette name="blue_8" color="#003267" />
      </div>

      <Text>Gray</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="gray_0" color="#F9F9FB" />
        <Palette name="gray_1" color="#EFEFF2" />
        <Palette name="gray_2" color="#EBEBEE" />
        <Palette name="gray_3" color="#E0E0E5" />
        <Palette name="gray_4" color="#CACACC" />
        <Palette name="gray_5" color="#B1B1B3" />
        <Palette name="gray_6" color="#767679" />
        <Palette name="gray_7" color="#444348" />
        <Palette name="gray_8" color="#15141A" />
        <Palette name="blue_gray" color="#8F8F9C" />
      </div>

      <Text>System Color</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="active_green" color="#69DB7C" />
        <Palette name="inactive_red" color="#FF8787" />
        <Palette name="warning_red_1" color="#FFF0EE" />
        <Palette name="warning_red_2" color="#F8D0D1" />
      </div>

      <Text>Green</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="green" color="#34C759" />
        <Palette name="thumbs_green" color="#40C057" />
        <Palette name="text_green" color="#00A21D" />

      </div>

      <Text>Red</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="red_5" color="#FF6B6B" />
        <Palette name="red_6" color="#FA5252" />
        <Palette name="red_7" color="#F03E3E" />
        <Palette name="red_8" color="#E03131" />
        <Palette name="red_9" color="#C92A2A" />
        <Palette name="red_10" color="#A51111" />
      </div>

      <Text>Orange</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="orange_1" color="#FFECE2" />
        <Palette name="interview_orange_7" color="#F38119" />
      </div>

      <Text>Refferal Color</Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name="referral_blue_1" color="#E8EFF7" />
        <Palette name="referral_blue_7" color="#1864AB" />
      </div>
    </div>
  );
};

export const Spacing = () => <div>【ツ】</div>;
