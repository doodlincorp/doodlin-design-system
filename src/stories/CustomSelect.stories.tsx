import React, { useState } from "react";
import CustomSelect from "../component/CustomSelect";
import Icon from "../component/Icon";
import "../reset.scss";

export default {
  title: "Component/CustomSelect",
  component: CustomSelect,
};

const options = [
  {
    icon: <Icon.Camera />,
    text: "헬로",
    care: "hello",
  },
  {
    icon: <Icon.Archive />,
    text: "반갑다",
    care: "heallo2",
  },
  {
    icon: <Icon.Dot />,
    text: "반가워",
    care: "hellao3",
  },
];

export const Default = () => {
  const [selectNum, setSelectNum] = useState({
    icon: <Icon.Camera />,
    text: "헬로",
    care: "hello",
  });
  return (
    <>
      <div style={{ padding: 20, width: 200 }}>
        <CustomSelect
          options={options}
          value={selectNum}
          getCurrentViewFunc={(o) => <div>{o.text}</div>}
          getOptionViewFunc={(o) => (
            <div onClick={() => setSelectNum(o)}>{o.text}</div>
          )}
          a11yStateSetter={setSelectNum}
        />
      </div>
      <div
        style={{
          width: 640,
          height: 480,
          overflow: "auto",
          backgroundColor: "whitesmoke",
        }}
      >
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div style={{ width: 300 }}>
          <CustomSelect
            options={options}
            value={selectNum}
            getCurrentViewFunc={(o) => <div>{o.text}</div>}
            getOptionViewFunc={(o) => (
              <div onClick={() => setSelectNum(o)}>{o.text}</div>
            )}
            a11yStateSetter={setSelectNum}
          />
        </div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div> <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
        <div>with scroll</div>
      </div>
    </>
  );
};
