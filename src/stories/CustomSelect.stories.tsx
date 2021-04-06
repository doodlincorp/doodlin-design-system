import React from "react";
import { Button } from "..";
import CustomSelect from "../component/CustomSelect";
import "../reset.scss";

export default {
  title: "Component/CustomSelect",
  component: CustomSelect,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <CustomSelect<number>
        options={[0, 1, 2, 3]}
        value={0}
        getCurrentViewFunc={(o) => <div className="current-item">{o}</div>}
        getOptionViewFunc={(o) => <div className="current-item">{o}</div>}
      />
    </div>
  );
};
