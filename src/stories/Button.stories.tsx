import React from "react";
import Button from "../components/Button";
import "../reset.scss";

export default {
  title: "Text",
  component: Button,
};

export const Default = () => <Button>기본</Button>;

export const Red = () => <Button>빨강</Button>;

export const Green = () => <Button>초록</Button>;

export const Blue = () => <Button>파랑</Button>;
