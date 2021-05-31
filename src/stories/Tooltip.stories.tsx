import React from "react";
import { Button } from "..";
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
        <Tooltip
          tooltipText={"단어형 툴팁"}
        >
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
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={"왼쪽 정렬"}
          placement="left"
        >
          <Button size="md">left</Button>
        </Tooltip>
      </span>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={"중앙 정렬"}
          placement="center"
        >
          <Button size="md">center</Button>
        </Tooltip>
      </span>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={"오른쪽 정렬"}
          placement="right"
        >
          <Button size="md">right</Button>
        </Tooltip>
      </span>
    </div>
  );
};
