import React from "react";
import Callout from "../component/Callout";
import Text from "../component/Text";
import "../reset.scss";

export default {
  title: "Component/Callout",
  component: Callout,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout variant="info">
        <Text size="small" weight="medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
    </div>
  );
};

export const Variant = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout variant="info">
        <Text size="small" weight="medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
      <br />
      <Callout variant="danger">
        <Text size="small" weight="medium">
          다음 안내사항을 꼭 확인해 주세요.
        </Text>
      </Callout>
    </div>
  );
};

export const Several = () => {
  return (
    <div style={{ padding: 20 }}>
      <Callout several>
        <Text variant="block" weight="medium">
          입력한 이메일로 초대를 보냈습니다.
        </Text>
        <Text variant="block" size="small">
          이메일에서 [팀 합류하기]를 누르면 초대가 완료됩니다.
        </Text>
        <br />
        <Text variant="block" size="small">
          asdf@gmail.com
        </Text>
        <Text variant="block" size="small">
          qwer@gmail.com
        </Text>
      </Callout>
      <br />
      <Callout several variant="danger">
        <Text variant="block" weight="medium">
          입력한 이메일로 초대를 보냈습니다.
        </Text>
        <Text variant="block" size="small">
          이메일에서 [팀 합류하기]를 누르면 초대가 완료됩니다.
        </Text>
        <br />
        <Text variant="block" size="small">
          asdf@gmail.com
        </Text>
        <Text variant="block" size="small">
          qwer@gmail.com
        </Text>
      </Callout>
    </div>
  );
};
