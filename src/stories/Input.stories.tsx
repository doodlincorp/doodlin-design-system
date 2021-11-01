import React from "react";
import Input from "../component/Input";
import "../component/Input";
import "../reset.scss";

import Icon from "../component/Icon";
import Textarea from "../component/Textarea";
import Divider from "../component/Divider";

export default {
  title: "Component/Input",
  component: Input,
};

export const Default = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder="내용을 입력하세요" />
  </div>
);

export const Size = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input inputSize="xs" placeholder="extra-small" />
    <Input inputSize="sm" placeholder="small" />
    <Input inputSize="md" placeholder="medium" />
    <Input inputSize="lg" placeholder="large" />
    <Input inputSize="xl" placeholder="extra-large" />
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input
      inputSize="xs"
      placeholder="with leading icon"
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="sm"
      placeholder="with leading icon"
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      placeholder="with leading icon"
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="lg"
      placeholder="with leading icon"
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="xl"
      placeholder="with leading icon"
      icon={{ leading: <Icon.Search /> }}
    />
    <Divider size={20} />
    <Input
      inputSize="xs"
      placeholder="with tailing icon"
      icon={{ tailing: <Icon.Search /> }}
    />
    <Input
      inputSize="sm"
      placeholder="with tailing icon"
      icon={{ tailing: <Icon.Search /> }}
    />
    <Input
      placeholder="with tailing icon"
      icon={{ tailing: <Icon.Search /> }}
    />
    <Input
      inputSize="lg"
      placeholder="with tailing icon"
      value="dsfsdf"
      onChange={() => {}}
      icon={{ tailing: <Icon.Search /> }}
    />
    <Input
      inputSize="xl"
      placeholder="with tailing icon"
      icon={{ tailing: <Icon.Search /> }}
    />
  </div>
);

export const PasswordInput = () => {
  return (
    <div style={{ padding: 10, maxWidth: 800 }}>
      <Input inputSize="xs" placeholder="password" password />
      <Input inputSize="sm" placeholder="password" password />
      <Input inputSize="md" placeholder="password" password />
      <Input inputSize="lg" placeholder="password" password />
      <Input inputSize="xl" placeholder="password" password />
    </div>
  );
};

export const Disabled = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input
      inputSize="xs"
      placeholder="비활성화"
      disabled
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="sm"
      placeholder="비활성화"
      disabled
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      placeholder="비활성화"
      disabled
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="lg"
      placeholder="비활성화"
      disabled
      icon={{ leading: <Icon.Search /> }}
    />
    <Input
      inputSize="xl"
      placeholder="비활성화"
      disabled
      icon={{ leading: <Icon.Search /> }}
    />
  </div>
);

export const InputTextarea = () => {
  return (
    <div style={{ padding: 10, maxWidth: 800 }}>
      <Textarea
        style={{ height: 200 }}
        placeholder="높이를 넘어가면 스크롤이 생기는 입력창입니다"
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나는 입력창입니다"
        borderType="single-line"
        rows={1}
        areaType="autosize"
      ></Textarea>
      <Textarea
        placeholder="높이를 넘어가면 자동으로 늘어나는 입력창입니다"
        borderType="underline"
        rows={1}
        areaType="autosize"
      ></Textarea>
    </div>
  );
};

export const Error = () => {
  return (
    <div style={{ padding: 10, maxWidth: 800 }}>
      <Input inputSize="xs" error errorMessage="올바른 정보를 입력해 주세요" />

      <Input inputSize="sm" error errorMessage="올바른 정보를 입력해 주세요" />

      <Input inputSize="md" error errorMessage="올바른 정보를 입력해 주세요" />

      <Input inputSize="lg" error errorMessage="올바른 정보를 입력해 주세요" />

      <Input inputSize="xl" error errorMessage="올바른 정보를 입력해 주세요" />

      <Divider size={40} />

      <Input inputSize="xs" error />

      <Input inputSize="sm" error />

      <Input inputSize="md" error />

      <Input inputSize="lg" error />

      <Input inputSize="xl" error />
    </div>
  );
};
