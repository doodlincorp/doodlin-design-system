import React from "react";
import { Button } from "..";
import Divider from "../component/Divider";
import Tooltip from "../component/Tooltip";
import "../reset.scss";

export default {
  title: "Component/Tooltip",
  component: Tooltip,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Tooltip tooltipText={"【ツ】"}>
        <Button size="md">커서를 올려보세요!</Button>
      </Tooltip>
    </div>
  );
};

export const variant = () => {
  return (
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <div className="box-tooltip-area" style={{ marginBottom: 60 }}>
        <Tooltip tooltipText={"단어형 툴팁"}>
          <Button size="md">단어형 툴팁</Button>
        </Tooltip>
      </div>
      <Tooltip
        tooltipText={"안녕하세요.\n문장형 정보 전달을 위한 툴팁입니다. 【ツ】"}
        variant="tail"
      >
        <Button size="md">문장형 툴팁</Button>
      </Tooltip>
    </div>
  );
};

export const placement = () => {
  return (
    <div style={{ padding: 100 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <Tooltip tooltipText={"왼쪽 상단 정렬"} placement="top-left">
          <Button size="md">top left</Button>
        </Tooltip>
        <Tooltip tooltipText={"위쪽 정렬"} placement="top">
          <Button size="md">top</Button>
        </Tooltip>
        <Tooltip tooltipText={"오른쪽 상단 정렬"} placement="top-right">
          <Button size="md">top right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <Tooltip tooltipText={"왼쪽 정렬"} placement="left">
          <Button size="md">left</Button>
        </Tooltip>
        <Tooltip tooltipText={"오른쪽 정렬"} placement="right">
          <Button size="md">right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <Tooltip tooltipText={"왼쪽 하단 정렬"} placement="bottom-left">
          <Button size="md">bottom left</Button>
        </Tooltip>
        <Tooltip tooltipText={"중앙 하단 정렬"} placement="bottom">
          <Button size="md">bottom</Button>
        </Tooltip>
        <Tooltip tooltipText={"오른쪽 하단 정렬"} placement="bottom-right">
          <Button size="md">bottom right</Button>
        </Tooltip>
      </div>
    </div>
  );
};
