import React, { useState } from "react";
import CustomSelect from "../component/CustomSelect";
import Icon from "../component/Icon";
import { ISelectBoxItem } from "../component/SelectBox";
import "../reset.scss";

export default {
  title: "Component/CustomSelect",
  component: CustomSelect,
};

export const Default = () => {
  const [selectNum, setSelectNum] = useState({
    icon: <Icon.Camera />,
    text: "헬로",
    care: "hello",
  });
  return (
    <div style={{ padding: 20, width: 200 }}>
      <CustomSelect
        options={[
          {
            icon: <Icon.Camera />,
            text: "헬로",
            care: "hello",
          },
          {
            icon: <Icon.Archive />,
            text: "헬로",
            care: "heallo",
          },
          {
            icon: <Icon.Dot />,
            text: "헬로",
            care: "hellao",
          },
        ]}
        value={selectNum}
        getCurrentViewFunc={(o) => <div>{o.text}</div>}
        getOptionViewFunc={(o) => (
          <div onClick={() => setSelectNum(o)}>{o.text}</div>
        )}
      />
    </div>
  );
};
