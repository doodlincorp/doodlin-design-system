import React from "react";
import Callout from "../component/Callout";
import Divider from "../component/Divider";
import Text from "../component/Text";
import "../reset.scss";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>
        위
        <Divider />
        아래
      </Text>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" />
          오른쪽
        </Text>
        <br />
        <br />
        <Callout icon>
          <Text size="small">
            Divider의 높이는 기본적으로 부모 태그의 font-size를 따릅니다.
          </Text>
        </Callout>
      </article>
    </div>
  );
};

export const DefaultSize = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider size={4} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider size={8} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider size={16} />
          아래
        </Text>
      </article>
    </div>
  );
};

export const VerticalSize = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" size={4} />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" size={8} />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" size={16} />
          오른쪽
        </Text>
      </article>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider color="red_7" />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider color="green_6" />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider color="blue_7" />
          아래
        </Text>
      </article>
    </div>
  );
};

export const Width = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider width={40} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider width={60} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" width={2} />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" width={4} />
          오른쪽
        </Text>
      </article>
    </div>
  );
};

export const Height = () => {
  return (
    <div style={{ padding: 20 }}>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider height={1} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider height={2} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          위
          <Divider height={4} />
          아래
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" height={40} />
          오른쪽
        </Text>
      </article>
      <article style={{ paddingBottom: 60 }}>
        <Text>
          왼쪽
          <Divider variant="vertical" height={60} />
          오른쪽
        </Text>
      </article>
    </div>
  );
};
