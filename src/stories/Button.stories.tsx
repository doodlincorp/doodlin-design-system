import React from "react";
import Icon from "../component/Icon";
import Button from "../component/Button";
import "../reset.scss";

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
    <Button size="xxs" label={{ labelText: "tiny" }} />
    <Button size="xs" label={{ labelText: "extra-small" }} />
    <Button size="sm" label={{ labelText: "small" }} />
    <Button size="md" label={{ labelText: "medium" }} />
    <Button size="lg" label={{ labelText: "large" }} />
    <Button size="xl" label={{ labelText: "extra-large" }} />
    <br />
    <br />
    <Button size="xxs" rounded label={{ labelText: "tiny" }} />
    <Button size="xs" rounded label={{ labelText: "extra-small" }} />
    <Button size="sm" rounded label={{ labelText: "small" }} />
    <Button size="md" rounded label={{ labelText: "medium" }} />
    <Button size="lg" rounded label={{ labelText: "large" }} />
    <Button size="xl" rounded label={{ labelText: "extra-large" }} />
    <br />
    <br />
    <Button size="xxs" label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="xs"  label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="sm"  label={{labelLeadingIcon:<Icon.Edit />}}/>
    <Button size="md"  label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="lg"  label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="xl"  label={{labelLeadingIcon:<Icon.Edit />}} />
    <br />
    <br />
    <Button size="xxs" rounded label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="xs"  rounded label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="sm"  rounded label={{labelLeadingIcon:<Icon.Edit />}}/>
    <Button size="md"  rounded label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="lg"  rounded label={{labelLeadingIcon:<Icon.Edit />}} />
    <Button size="xl"  rounded label={{labelLeadingIcon:<Icon.Edit />}} />
    <br />
    <br />
    <Button size="xxs" label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xs"  label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="sm"  label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }}/>
    <Button size="md"  label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="lg"  label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xl"  label={{labelLeadingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <br />
    <br />
    <Button size="xxs" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xs"  label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="sm"  label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }}/>
    <Button size="md"  label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="lg"  label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xl"  label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <br />
    <br />
    <Button size="xxs" variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xs"  variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="sm"  variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }}/>
    <Button size="md"  variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="lg"  variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />
    <Button size="xl"  variant="ghost" label={{labelTailingIcon:<Icon.Edit />, labelText:"공고 설정" }} />


  </div>
);

export const Type = () => (
  <div style={{ padding: 20 }}>
    <Button
      size="md"
      buttonType="light"
      label={{ labelText: "light" }}
    />
    <Button size="md" buttonType="basic" label={{ labelText: "basic" }} />
    <Button size="md" buttonType="core" label={{ labelText: "core" }} />
    <Button size="md" buttonType="danger" label={{ labelText: "danger" }} />
  </div>
);

export const Rounded = () => (
  <div style={{ padding: 20 }}>
    <Button
      size="md"
      buttonType="light"
      rounded
      label={{ labelText: "light" }}
    />
    <Button
      size="md"
      buttonType="basic"
      rounded
      label={{ labelText: "basic" }}
    />
    <Button size="md" buttonType="core" rounded label={{ labelText: "core" }} />
    <Button
      size="md"
      buttonType="danger"
      rounded
      label={{ labelText: "danger" }}
    />
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Solid</h1>
      <Button size="md" buttonType="light" label={{ labelText: "light" }} />
      <Button size="md" buttonType="basic" label={{ labelText: "basic" }} />
      <Button size="md" buttonType="core" label={{ labelText: "core" }} />
      <Button size="md" buttonType="danger" label={{ labelText: "danger" }} />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        variant="quiet"
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="quiet"
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Text only</h1>
      <Button
        size="md"
        variant="textonly"
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="textonly"
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="textonly"
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="textonly"
        buttonType="danger"
        label={{ labelText: "danger" }}
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
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        loading
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        loading
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        loading
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        buttonType="light"
        label={{ labelText: "light" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="basic"
        label={{ labelText: "basic" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="core"
        label={{ labelText: "core" }}
        loading
      />
      <Button
        size="md"
        variant="ghost"
        buttonType="danger"
        label={{ labelText: "danger" }}
        loading
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        loading
        variant="quiet"
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        loading
        variant="quiet"
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Text only</h1>
      <Button
        size="md"
        variant="textonly"
        loading
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="textonly"
        loading
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="textonly"
        loading
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="textonly"
        loading
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 20 }}>
    <Button
      size="md"
      buttonType="basic"
      fullWidth
      label={{ labelText: "basic" }}
    />
    <Button
      size="md"
      buttonType="core"
      fullWidth
      label={{ labelText: "core" }}
    />
    <Button
      size="md"
      buttonType="danger"
      fullWidth
      label={{ labelText: "danger" }}
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
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        disabled
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        disabled
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        disabled
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Ghost</h1>
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="ghost"
        disabled
        buttonType="danger"
        label={{ labelText: "danger" }}
      />
    </div>
    <div className="article" style={{ marginBottom: 28 }}>
      <h1 style={{ marginBottom: 12 }}>Quiet</h1>
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonType="light"
        label={{ labelText: "light" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonType="basic"
        label={{ labelText: "basic" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonType="core"
        label={{ labelText: "core" }}
      />
      <Button
        size="md"
        variant="quiet"
        disabled
        buttonType="danger"
        label={{ labelText: "danger" }}
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
          buttonType="light"
          size="xxs"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="xs"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="xl"
          
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          buttonType="light"
          size="xxs"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="xs"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="sm"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="md"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="lg"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          buttonType="light"
          size="xl"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
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
          buttonType="basic"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="xl"
          
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          buttonType="basic"
          size="xs"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="sm"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="md"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="lg"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          buttonType="basic"
          size="xl"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
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
          buttonType="light"
          size="xs"
          label={{ labelLeadingIcon: <Icon.Setting />, labelText: "설정" }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="sm"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="md"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="lg"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="xl"
          
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          buttonType="light"
          size="xs"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="sm"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="md"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="lg"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          buttonType="light"
          size="xl"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
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
          buttonType="light"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="ghost"
          buttonType="basic"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="ghost"
          buttonType="core"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="ghost"
          buttonType="danger"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          buttonType="light"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="quiet"
          buttonType="basic"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="quiet"
          buttonType="core"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="quiet"
          buttonType="danger"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          
          buttonType="light"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="solid"
          
          buttonType="basic"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="solid"
          
          buttonType="core"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
        <Button
          variant="solid"
          
          buttonType="danger"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
          
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="textonly"
          
          buttonType="light"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="textonly"
          
          buttonType="basic"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="textonly"
          
          buttonType="core"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
            labelText: "설정",
          }}
        />
        <Button
          variant="textonly"
          
          buttonType="danger"
          label={{
            labelLeadingIcon: <Icon.Setting color="gray_7" />,
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
          
          buttonType="light"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          
          buttonType="basic"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          
          buttonType="core"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="ghost"
          
          buttonType="danger"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="quiet"
          
          buttonType="light"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          
          buttonType="basic"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          
          buttonType="core"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="quiet"
          
          buttonType="danger"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
      </div>

      <div
        className="buttons"
        style={{ display: "flex", alignItems: "center", marginTop: 8 }}
      >
        <Button
          variant="solid"
          
          buttonType="light"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          
          buttonType="basic"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          
          buttonType="core"
          
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
        <Button
          variant="solid"
          
          buttonType="danger"
          label={{ labelLeadingIcon: <Icon.Setting color="gray_7" /> }}
        />
      </div>
    </div>
  </div>
);
