import React from "react";
import Avatar from "../component/Avatar";
import Divider from "../component/Divider";
import Text from "../component/Text";

export default {
  title: "Component/Avatar",
  component: Avatar,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Avatar src={null} name={"김민수"} />
    <Divider variant="vertical" />
    <Avatar
      src={"https://source.unsplash.com/random/150x150"}
      name={"김민수"}
    />
  </div>
);

export const Size = () => (
  <div style={{ padding: 20 }}>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">24px</Text>
      <Avatar size="xs" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="xs"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">32px</Text>
      <Avatar size="sm" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="sm"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">40px</Text>
      <Avatar size="md" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="md"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">48px</Text>
      <Avatar size="lg" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="lg"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">60px</Text>
      <Avatar size="xl" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="xl"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">150px (hover, active 효과 없음)</Text>
      <Avatar size="xxl" src={null} name={"김민수"} />
      <Divider variant="vertical" />
      <Avatar
        size="xxl"
        src={"https://source.unsplash.com/random/150x150"}
        name={"김민수"}
      />
    </div>
  </div>
);

export const CustomSize = () => (
  <div style={{ padding: 20 }}>
    <Avatar customSize={56} src={null} name={"김민수"} />
    <Divider variant="vertical" />
    <Avatar
      customSize={88}
      src={"https://source.unsplash.com/random/150x150"}
      name={"김민수"}
    />
  </div>
);

export const Color = () => (
  <div style={{ padding: 20 }}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
      <div style={{ width: 40, height: 40, marginBottom: 4 }} key={id}>
        <Avatar src={null} userId={id} name={"김민수"} />
      </div>
    ))}
  </div>
);
