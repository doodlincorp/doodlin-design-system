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
  <div style={{ padding: 20 }}>
    <Button>기본 버튼</Button>
  </div>
);

export const Size = () => (
  <div style={{ padding: 20 }}>
    <Button size="xs">tiny</Button>
    <Button size="sm">small</Button>
    <Button size="md">medium</Button>
    <Button size="lg">large</Button>
    <Button size="xl">extra-large</Button>
  </div>
);

export const Type = () => (
  <div style={{ padding: 20 }}>
    <Button size="md" buttonType="light">
      light
    </Button>
    <Button size="md" buttonType="basic">
      basic
    </Button>
    <Button size="md" buttonType="core">
      core
    </Button>
    <Button size="md" buttonType="danger">
      danger
    </Button>
  </div>
);

export const Rounded = () => (
  <div style={{ padding: 20 }}>
    <Button size="md" buttonType="light" rounded>
      light
    </Button>
    <Button size="md" buttonType="basic" rounded>
      basic
    </Button>
    <Button size="md" buttonType="core" rounded>
      core
    </Button>
    <Button size="md" buttonType="danger" rounded>
      danger
    </Button>
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button size="md" buttonType="light" variant="solid">
        light
      </Button>
      <Button size="md" buttonType="basic" variant="solid">
        basic
      </Button>
      <Button size="md" buttonType="core" variant="solid">
        core
      </Button>
      <Button size="md" buttonType="danger" variant="solid">
        danger
      </Button>
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button size="md" buttonType="light" variant="ghost">
        light
      </Button>
      <Button size="md" buttonType="basic" variant="ghost">
        basic
      </Button>
      <Button size="md" buttonType="core" variant="ghost">
        core
      </Button>
      <Button size="md" buttonType="danger" variant="ghost">
        danger
      </Button>
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button size="md" buttonType="light" variant="quiet">
        light
      </Button>
      <Button size="md" buttonType="basic" variant="quiet">
        basic
      </Button>
      <Button size="md" buttonType="core" variant="quiet">
        core
      </Button>
      <Button size="md" buttonType="danger" variant="quiet">
        danger
      </Button>
    </div>
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button size="md" buttonType="light" variant="solid" disabled>
        light
      </Button>
      <Button size="md" buttonType="basic" variant="solid" disabled>
        basic
      </Button>
      <Button size="md" buttonType="core" variant="solid" disabled>
        core
      </Button>
      <Button size="md" buttonType="danger" variant="solid" disabled>
        danger
      </Button>
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button size="md" buttonType="light" variant="ghost" disabled>
        light
      </Button>
      <Button size="md" buttonType="basic" variant="ghost" disabled>
        basic
      </Button>
      <Button size="md" buttonType="core" variant="ghost" disabled>
        core
      </Button>
      <Button size="md" buttonType="danger" variant="ghost" disabled>
        danger
      </Button>
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button size="md" buttonType="light" variant="quiet" disabled>
        light
      </Button>
      <Button size="md" buttonType="basic" variant="quiet" disabled>
        basic
      </Button>
      <Button size="md" buttonType="core" variant="quiet" disabled>
        core
      </Button>
      <Button size="md" buttonType="danger" variant="quiet" disabled>
        danger
      </Button>
    </div>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 20 }}>
    <Button size="md" buttonType="light" fullWidth>
      light
    </Button>
    <Button size="md" buttonType="basic" fullWidth>
      basic
    </Button>
    <Button size="md" buttonType="core" fullWidth>
      core
    </Button>
    <Button size="md" buttonType="danger" fullWidth>
      danger
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

export const Loading = () => <div style={{ padding: 20 }}></div>;
