import React, { useState } from "react";
import SelectBox, { ISelectBoxItem } from "../component/SelectBox";
import "../reset.scss";

export default {
  title: "Component/SelectBox",
  component: SelectBox,
};

export const Default = () => {
  const [selectedOption, setSelectOption] = useState<ISelectBoxItem>({
    text: "안녕하세요",
  });
  return (
    <div style={{ padding: 20, width: 200 }}>
      <SelectBox<ISelectBoxItem>
        options={[
          {
            text: "안녕하세요",
          },
          {
            icon: "👩",
            text: "헬로",
          },
        ]}
        value={selectedOption}
        selectFunc={(o) => setSelectOption(o)}
      />
    </div>
  );
};
