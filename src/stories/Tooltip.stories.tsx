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
      <Tooltip tooltipText={{ Text: "【ツ】" }}>
        <Button>툴팁</Button>
      </Tooltip>
    </div>
  );
};

export const variant = () => {
  return (
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <div className="box-tooltip-area" style={{ marginBottom: 60 }}>
        <Tooltip
          tooltipText={{
            Text: "단어형 툴팁",
          }}
        >
          <Button>툴팁</Button>
        </Tooltip>
      </div>
      <Tooltip
        tooltipText={{
          Text: "안녕하세요.\n 문장형 정보 전달을 위한 툴팁입니다. 【ツ】",
        }}
        variant="tail"
      >
        <Button>툴팁</Button>
      </Tooltip>
    </div>
  );
};

export const placement = () => {
  return (
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={{
            Text: "【ツ】",
          }}
          placement="left"
        >
          <Button>left</Button>
        </Tooltip>
      </span>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={{
            Text: "【ツ】",
          }}
          placement="center"
        >
          <Button>center</Button>
        </Tooltip>
      </span>
      <span style={{ marginLeft: 20 }}>
        <Tooltip
          tooltipText={{
            Text: "【ツ】",
          }}
          placement="right"
        >
          <Button>right</Button>
        </Tooltip>
      </span>
    </div>
  );
};
