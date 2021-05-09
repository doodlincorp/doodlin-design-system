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
      <Text>
        안녕하세요? 핏플입니다.
        <br />
        날씨가 참 좋아요.
      </Text>
    </div>
  );
};

export const Variant = () => {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ color: "#1C7ED6", paddingBottom: 8 }}>
        <Text variant="h4">Title</Text>
      </header>
      <Text variant="h1">h1 타이틀 48px</Text>
      <Text variant="h2">h2 타이틀 36px </Text>
      <Text variant="h3">h3 타이틀 24px</Text>
      <Text variant="h4">h4 타이틀 21px </Text>
      <Text variant="h5">h5 타이틀 18px </Text>

      <header style={{ color: "#1C7ED6", paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Font Size</Text>
      </header>
      <Text variant="block" size="xx-small">
        xx-small: 12px
      </Text>
      <Text variant="block" size="x-small">
        x-small: 13px
      </Text>
      <Text variant="block" size="small">
        small: 14px
      </Text>
      <Text variant="block" size="medium">
        medium: 16px
      </Text>
      <Text variant="block" size="large">
        large: 18px
      </Text>
      <Text variant="block" size="x-large">
        x-large: 21px
      </Text>
      <Text variant="block" size="xx-large">
        xx-large: 24px
      </Text>
      <Text variant="block" size="xxx-large">
        xxx-large: 36px
      </Text>
      <Text variant="block" size="xxxx-large">
        xxxx-large: 48px
      </Text>

      <header style={{ color: "#1C7ED6", paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Font Weight</Text>
      </header>
      <Text variant="block" weight="light">
        font-weight: light
      </Text>
      <Text variant="block" weight="regular">
        font-weight: regular
      </Text>
      <Text variant="block" weight="medium">
        font-weight: medium
      </Text>
      <Text variant="block" weight="bold">
        font-weight: bold
      </Text>

      <header style={{ color: "#1C7ED6", paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Line Height</Text>
      </header>
      <header style={{ paddingBottom: 8 }}>
        <Text variant="h5">1.5em</Text>
      </header>
      <Text variant="block" lineHeight="medium">
        토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리
        내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다.
        잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루,
        별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘
        사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.{" "}
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">1.75em</Text>
      </header>
      <Text variant="block" lineHeight="large">
        토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리
        내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다.
        잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루,
        별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘
        사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.
      </Text>
      <header style={{ color: "#1C7ED6", paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Text Align</Text>
      </header>
      <header style={{ paddingBottom: 8 }}>
        <Text variant="h5">start</Text>
      </header>
      <Text variant="block" align="start">
        토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리
        내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다.
        잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루,
        별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘
        사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">center</Text>
      </header>
      <Text variant="block" align="center">
        토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리
        내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다.
        잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루,
        별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘
        사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">end</Text>
      </header>
      <Text variant="block" align="end">
        토끼, 않은 이런 계절이 내일 하나에 별빛이 이네들은 봅니다. 이름과, 멀리
        내 있습니다. 별에도 별 이름과, 이제 언덕 프랑시스 소학교 까닭입니다.
        잔디가 소학교 둘 패, 어머니, 그리워 애기 듯합니다. 소녀들의 내일 노루,
        별 가을 옥 이름과 내 있습니다. 같이 나는 오는 패, 이름과 새겨지는 둘
        사람들의 듯합니다. 비둘기, 새겨지는 별 우는 않은 까닭입니다.
      </Text>
    </div>
  );
};
