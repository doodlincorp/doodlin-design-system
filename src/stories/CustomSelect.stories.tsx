import React, { useState } from "react";
import CustomSelect from "../component/CustomSelect";
import "../reset.scss";

export default {
  title: "Component/CustomSelect",
  component: CustomSelect,
};

export const Default = () => {
  const [selectNum, setSelectNum] = useState<number>(0);
  return (
    <div style={{ padding: 20, width: 200 }}>
      <CustomSelect<number>
        options={[0, 1, 2, 3]}
        value={selectNum}
        getCurrentViewFunc={(o) => <div className="current-item">{o}</div>}
        getOptionViewFunc={(o) => (
          <div className="current-item" onClick={() => setSelectNum(o)}>
            {o}
          </div>
        )}
      />
    </div>
  );
};
