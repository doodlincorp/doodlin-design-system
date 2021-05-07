import React from "react";
import Callout from "../component/Callout";
import { InfoMarkIcon } from "../component/Icon/InfoMarkIcon";
import Text from "../component/Text";
import "../reset.scss";

export default {
  title: "Component/Callout",
  component: Callout,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout icon>
        <Text size="font-size-small" weight="font-weight-medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
    </div>
  );
};

export const Variant = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout icon variant="info">
        <Text size="font-size-small" weight="font-weight-medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
      <br />
      <Callout icon variant="danger">
        <Text size="font-size-small" weight="font-weight-medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
    </div>
  );
};

export const Several = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout icon several>
        <Text variant="block" weight="font-weight-medium">
          입력한 이메일로 초대를 보냈습니다.
        </Text>
        <Text variant="block" size="font-size-small">
          이메일에서 [팀 합류하기]를 누르면 초대가 완료됩니다.
        </Text>
        <br />
        <Text variant="block" size="font-size-small">
          asdf@gmail.com
        </Text>
        <Text variant="block" size="font-size-small">
          qwer@gmail.com
        </Text>
      </Callout>
      <br />
      <Callout icon several variant="danger">
        <Text variant="block" weight="font-weight-medium">
          입력한 이메일로 초대를 보냈습니다.
        </Text>
        <Text variant="block" size="font-size-small">
          이메일에서 [팀 합류하기]를 누르면 초대가 완료됩니다.
        </Text>
        <br />
        <Text variant="block" size="font-size-small">
          asdf@gmail.com
        </Text>
        <Text variant="block" size="font-size-small">
          qwer@gmail.com
        </Text>
      </Callout>
    </div>
  );
};
