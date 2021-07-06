import { useState } from "@storybook/addons";
import React from "react";
import Divider from "../component/Divider";
import Tab, { TabItem } from "../component/Tab";
import Icon from "../component/Icon";
import "../reset.scss";

export default {
  title: "Component/Tab",
  component: Tab,
};

export const Default = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tab>
        <TabItem
          label="1번"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="2번"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>
      <Divider />
      {select ? "2번" : "1번"}
    </div>
  );
};

export const Size = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tab size="xs">
        <TabItem
          label="extra-small"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="extra-small"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>

      <Divider size={40} />

      <Tab size="sm">
        <TabItem
          label="small"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="small"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>

      <Divider size={40} />

      <Tab size="md">
        <TabItem
          label="medium"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="medium"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>

      <Divider size={40} />

      <Tab size="md">
        <TabItem
          label="width: 120px"
          width={120}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="width: 120px"
          width={120}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>

      <Divider size={40} />

      <Tab size="md">
        <TabItem
          label="width: 200px"
          width={200}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="width: 200px"
          width={200}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>
    </div>
  );
};

export const Variant = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tab variant="rail">
        <TabItem
          label="1번"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="2번"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>

      <Divider size={40} />

      <Tab size="md" variant="underline">
        <TabItem
          label="1번"
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="2번"
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tab>
    </div>
  );
};

export const Disabled = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tab variant="rail">
        <TabItem
          label="1번"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          disabled
        />
        <TabItem
          label="2번"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          disabled
        />
      </Tab>

      <Divider size={40} />

      <Tab size="md" variant="underline">
        <TabItem
          label="1번"
          onClick={() => setSelect(false)}
          selected={!select}
          disabled
        />
        <TabItem
          label="2번"
          onClick={() => setSelect(true)}
          selected={select}
          disabled
        />
      </Tab>
    </div>
  );
};

export const WithIcon = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tab>
        <TabItem
          label="leading"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ leading: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          label="leading"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ leading: <Icon.Emoji variant="border" /> }}
        />
      </Tab>

      <Divider size={40} />

      <Tab>
        <TabItem
          label="tailing"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          label="tailing"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
      </Tab>

      <Divider size={40} />

      <Tab>
        <TabItem
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
      </Tab>

      <Divider size={40} />

      <Tab variant="underline">
        <TabItem
          label="leading"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ leading: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          label="leading"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ leading: <Icon.Emoji variant="border" /> }}
        />
      </Tab>

      <Divider size={40} />

      <Tab variant="underline">
        <TabItem
          label="tailing"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          label="tailing"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
      </Tab>

      <Divider size={40} />

      <Tab variant="underline">
        <TabItem
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
        <TabItem
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
          icon={{ tailing: <Icon.Emoji variant="border" /> }}
        />
      </Tab>
    </div>
  );
};
