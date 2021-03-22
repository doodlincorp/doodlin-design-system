import React from "react";
import Button from "../component/Button";
import "../reset.scss";
import { BsCheck } from "react-icons/bs";
import Text from "../component/Text";

export default {
  title: "Component/Button",
  component: Button,
};

export const Default = () => (
  <div style={{ padding: 10 }}>
    <Button>기본 버튼</Button>
  </div>
);

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Button size="xxs" style={{ margin: 4 }}>
      2XSMALL
    </Button>
    <Button size="xs" style={{ margin: 4 }}>
      XSMALL
    </Button>
    <Button size="sm" style={{ margin: 4 }}>
      SMALL
    </Button>
    <Button size="md" style={{ margin: 4 }}>
      MEDIUM
    </Button>
    <Button size="lg" style={{ margin: 4 }}>
      LARGE
    </Button>
    <Button size="xl" style={{ margin: 4 }}>
      XLARGE
    </Button>
    <Button size="xxl" style={{ margin: 4 }}>
      2XLARGE
    </Button>
    <Button size="xxxl" style={{ margin: 4 }}>
      3XLARGE
    </Button>
  </div>
);

export const Ghost = () => (
  <div style={{ padding: 10 }}>
    <Button size="xxs" variant="ghost">
      2XSMALL
    </Button>
    <Button size="xs" variant="ghost">
      XSMALL
    </Button>
    <Button size="sm" variant="ghost">
      SMALL
    </Button>
    <Button size="md" variant="ghost">
      MEDIUM
    </Button>
    <Button size="lg" variant="ghost">
      LARGE
    </Button>
    <Button size="xl" variant="ghost">
      XLARGE
    </Button>
    <Button size="xxl" variant="ghost">
      2XLARGE
    </Button>
    <Button size="xxxl" variant="ghost">
      3XLARGE
    </Button>
  </div>
);

export const TextOnly = () => (
  <div style={{ padding: 10 }}>
    <Button size="xxs" variant="text">
      2XSMALL
    </Button>
    <Button size="xs" variant="text">
      XSMALL
    </Button>
    <Button size="sm" variant="text">
      SMALL
    </Button>
    <Button size="md" variant="text">
      MEDIUM
    </Button>
    <Button size="lg" variant="text">
      LARGE
    </Button>
    <Button size="xl" variant="text">
      XLARGE
    </Button>
    <Button size="xxl" variant="text">
      2XLARGE
    </Button>
    <Button size="xxxl" variant="text">
      3XLARGE
    </Button>
  </div>
);

export const Rounded = () => (
  <div style={{ padding: 10 }}>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Default Button
      </Text>
      <Button style={{ marginTop: 10 }} rounded>
        둥근 버튼
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Ghost Button
      </Text>
      <Button style={{ marginTop: 10 }} variant="ghost" rounded>
        둥근 버튼
      </Button>
    </div>
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 10 }}>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Default Button
      </Text>
      <Button style={{ marginTop: 10 }} disabled>
        비활성화
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Ghost Button
      </Text>
      <Button style={{ marginTop: 10 }} variant="ghost" disabled>
        비활성화
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Text-only Button
      </Text>
      <Button style={{ marginTop: 10 }} variant="text" disabled>
        비활성화
      </Button>
    </div>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 10 }}>
    <Button size="xxs" fullWidth>
      2XSMALL
    </Button>
    <Button size="xs" fullWidth>
      XSMALL
    </Button>
    <Button size="sm" fullWidth>
      SMALL
    </Button>
    <Button size="md" fullWidth>
      MEDIUM
    </Button>
    <Button size="lg" fullWidth>
      LARGE
    </Button>
    <Button size="xl" fullWidth>
      XLARGE
    </Button>
    <Button size="xxl" fullWidth>
      2XLARGE
    </Button>
    <Button size="xxxl" fullWidth>
      3XLARGE
    </Button>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: 10 }}>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Leading-icon
      </Text>
      <Button style={{ marginTop: 10 }}>
        <BsCheck />
        버튼
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Tailing-icon
      </Text>
      <Button style={{ marginTop: 10 }} variant="ghost">
        버튼
        <BsCheck />
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Text-only
      </Text>
      <Button style={{ marginTop: 10 }} variant="text">
        버튼
      </Button>
    </div>
    <div style={{ marginBottom: 30 }}>
      <Text size="tit-md" nonKorean>
        Icon-only
      </Text>
      <Button style={{ marginTop: 10 }}>
        <BsCheck fontSize={16} />
      </Button>
    </div>
  </div>
);

export const Loading = () => (
  <div style={{ padding: 10 }}>
    <Button size="xxs" loading="spin">
      2XSMALL
    </Button>
    <Button size="xs" loading="spin">
      XSMALL
    </Button>
    <Button size="sm" loading="spin">
      SMALL
    </Button>
    <Button size="md" loading="spin">
      MEDIUM
    </Button>
    <Button size="lg" loading="spin">
      LARGE
    </Button>
    <Button size="xl" loading="spin">
      XLARGE
    </Button>
    <Button size="xxl" loading="spin">
      2XLARGE
    </Button>
    <Button size="xxxl" loading="spin">
      3XLARGE
    </Button>
  </div>
);
