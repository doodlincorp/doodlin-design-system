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
        a11yStateSetter={setSelectOption}
      />
    </div>
  );
};

export const Variant = () => {
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
        a11yStateSetter={setSelectOption}
      />
      <br />
      <SelectBox<ISelectBoxItem>
        variant="border"
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
        a11yStateSetter={setSelectOption}
      />
      <br />
      <SelectBox<ISelectBoxItem>
        variant="quiet"
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
        a11yStateSetter={setSelectOption}
      />
    </div>
  );
};

export const Size = () => {
  const [selectedOption, setSelectOption] = useState<ISelectBoxItem>({
    text: "안녕하세요",
  });
  return (
    <div style={{ padding: 20, width: 200 }}>
      <SelectBox<ISelectBoxItem>
        size="xxs"
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
        a11yStateSetter={setSelectOption}
      />
      <br />
      <SelectBox<ISelectBoxItem>
        size="xs"
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
        a11yStateSetter={setSelectOption}
      />
      <br />
      <SelectBox<ISelectBoxItem>
        size="sm"
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
        a11yStateSetter={setSelectOption}
      />
      <br />
      <SelectBox<ISelectBoxItem>
        size="md"
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
        a11yStateSetter={setSelectOption}
      />
    </div>
  );
};
