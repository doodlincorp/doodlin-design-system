import React from "react";
import "../reset.scss";
import Skeleton from "../component/Skeleton";
import Text from "../component/Text";

export default {
  title: "Component/Skeleton",
  component: Skeleton,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Skeleton.Box width={200} height={100} />
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <Text variant="h4" lineHeight="wide">
      Rect
    </Text>
    <Skeleton.Box variant="rect" width={60} height={60} />
    <br />
    <Text variant="h4" lineHeight="wide">
      Circle
    </Text>
    <Skeleton.Box variant="circle" width={60} height={60} />
  </div>
);

export const Animation = () => (
  <div style={{ padding: 20 }}>
    <Text variant="h4" lineHeight="wide">
      Wave
    </Text>
    <Skeleton.Box animation="wave" width={200} height={100} />
    <br />
    <Text variant="h4" lineHeight="wide">
      Pulse
    </Text>
    <Skeleton.Box animation="pulse" width={200} height={100} />
    <br />
    <Text variant="h4" lineHeight="wide">
      False
    </Text>
    <Skeleton.Box animation="false" width={200} height={100} />
  </div>
);

export const Box = () => (
  <div style={{ padding: 20 }}>
    <Skeleton.Box animation="wave" width="100%" height={20} />
    <br />
    <Skeleton.Box animation="wave" width="50%" height={40} />
    <br />
    <Skeleton.Box animation="wave" width={120} height={120} />
  </div>
);

export const Button = () => (
  <div style={{ padding: 20 }}>
    <Skeleton.Btn animation="wave" size="xs" />
    <br />
    <Skeleton.Btn animation="wave" size="sm" />
    <br />
    <Skeleton.Btn animation="wave" size="md" />
    <br />
    <Skeleton.Btn animation="wave" size="lg" />
    <br />
    <Skeleton.Btn animation="wave" size="xl" />
  </div>
);
