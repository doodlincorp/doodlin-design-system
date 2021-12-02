import React from "react";
import Icon from "../component/Icon";
import { EColorMap } from "../utils/colorMap";
import Button from "../component/Button";
import "../reset.scss";
import Divider from "../component/Divider";

export default {
  title: "Component/Button",
  component: Button,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Button label={{ labelText: "기본 버튼" }} />
  </div>
);

export const Size = () => (
  <div style={{ padding: 20 }}>
    <Button size="xxs" label={{ labelText: "xxs" }} />
    <Button size="xs" label={{ labelText: "xs" }} />
    <Button size="sm" label={{ labelText: "sm" }} />
    <Button size="md" label={{ labelText: "md" }} />
    <Button size="lg" label={{ labelText: "lg" }} />
    <Button size="xl" label={{ labelText: "xl" }} />
  </div>
);

export const Type = () => (
  <div style={{ padding: 20 }}>
    <Button size="md" buttonColor="gray" label={{ labelText: "gray" }} />
    <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
    <Button size="md" buttonColor="blue" label={{ labelText: "blue" }} />
    <Button size="md" buttonColor="red" label={{ labelText: "red" }} />
  </div>
);

export const ColorOption = () => (
  <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
    <Button
      size="md"
      label={{ labelText: "custom" }}
      colorOption={{
        font: EColorMap.blue_5,
        default: EColorMap.blue_1,
        hover: EColorMap.blue_2,
        active: EColorMap.blue_3
      }}

    />
    <Button
      size="md"
      label={{ labelLeadingIcon: <Icon.Edit /> }}
      colorOption={{
        default: EColorMap.blue_1,
        hover: EColorMap.blue_2,
        active: EColorMap.blue_3,
        icon: {
          default: EColorMap.blue_5,
          hover: EColorMap.blue_6,
          active: EColorMap.blue_7,
        }
      }}
    />
  </div>
);


export const Spacer = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>With spacer(default, margin-left: 8px)</h1>
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
    </div>

    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Without spacer(no margin left)</h1>
      <Button size="md" spacer={false} buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" spacer={false} buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" spacer={false} buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" spacer={false} buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" spacer={false} buttonColor="black" label={{ labelText: "black" }} />
    </div>
  </div>
);


export const Rounded = () => (
  <div style={{ padding: 20 }}>
    <Button
      size="md"
      buttonColor="gray"
      rounded
      label={{ labelText: "gray" }}
    />
    <Button
      size="md"
      buttonColor="black"
      rounded
      label={{ labelText: "black" }}
    />
    <Button
      size="md"
      buttonColor="blue"
      rounded
      label={{ labelText: "blue" }}
    />
    <Button size="md" buttonColor="red" rounded label={{ labelText: "red" }} />
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button size="md" buttonColor="gray" label={{ labelText: "gray" }} />
      <Button size="md" buttonColor="black" label={{ labelText: "black" }} />
      <Button size="md" buttonColor="blue" label={{ labelText: "blue" }} />
      <Button size="md" buttonColor="red" label={{ labelText: "red" }} />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        variant="quiet"
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Minimal</h1>
      <Button
        size="md"
        variant="minimal"
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="minimal"
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="minimal"
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="minimal"
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
  </div>
);

export const Loading = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button
        size="md"
        loading
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        loading
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        loading
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        loading
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        buttonColor="gray"
        label={{ labelText: "gray" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="black"
        label={{ labelText: "black" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="blue"
        label={{ labelText: "blue" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonColor="red"
        label={{ labelText: "red" }}
        loading
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        loading
        variant="quiet"
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Text only</h1>
      <Button
        size="md"
        variant="minimal"
        loading
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="minimal"
        loading
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="minimal"
        loading
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="minimal"
        loading
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 20 }}>
    <Button
      size="md"
      buttonColor="black"
      fullWidth
      label={{ labelText: "black" }}
    />
    <Button
      size="md"
      buttonColor="blue"
      fullWidth
      label={{ labelText: "blue" }}
    />
    <Button
      size="md"
      buttonColor="red"
      fullWidth
      label={{ labelText: "red" }}
    />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button
        size="md"
        disabled
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        disabled
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        disabled
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        disabled
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonColor="gray"
        label={{ labelText: "gray" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonColor="black"
        label={{ labelText: "black" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonColor="blue"
        label={{ labelText: "blue" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonColor="red"
        label={{ labelText: "red" }}
      />
    </div>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: 10 }}>
    <div className="article" style={{ marginBottom: 20 }}>
      <h1>Ghost</h1>
      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>
    </div>
    <div className="article" style={{ marginBottom: 20 }}>
      <h1>Quiet</h1>
      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>
    </div>
    <div className="article" style={{ marginBottom: 20 }}>
      <h1>Solid</h1>
      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="solid"
          buttonColor="gray"
          size="xxs"
          label={{ labelLeadingIcon: <Icon.Setting />, labelText: "설정" }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="xs"
          label={{ labelLeadingIcon: <Icon.Setting />, labelText: "설정" }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="solid"
          buttonColor="gray"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="gray"
          size="xl"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>
    </div>
    <div className="article" style={{ marginBottom: 20 }}>
      <h1>With Type</h1>
      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 20 }}
      >
        <Button
          variant="ghost"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="quiet"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="solid"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="minimal"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="minimal"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="minimal"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
        <Button
          variant="minimal"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
            labelText: "설정",
          }}
        />
      </div>

      <br />

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="ghost"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="ghost"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="quiet"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="quiet"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="solid"
          buttonColor="gray"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="black"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="blue"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
        <Button
          variant="solid"
          buttonColor="red"
          label={{
            labelLeadingIcon: <Icon.Setting color={EColorMap.gray_7} />,
          }}
        />
      </div>
    </div>
  </div>
);
