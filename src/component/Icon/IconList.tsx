import React from "react";
import { PenIcon } from "../../asset/PenIcon";

const Icon = ({ icon }: any) => {
  return (
    <div>
      <div>{icon.url}</div>
    </div>
  );
};

const IconList = () => {
  const icons = [
    {
      name: "pen",
      url: <PenIcon />,
    },
    {
      name: "login_kakao",
      url: "./svg/login_kakao_logo.svg",
    },
  ];
  return (
    <div>
      {icons.map((icon, index) => (
        <Icon icon={icon} key={index} />
      ))}
    </div>
  );
};

export default IconList;
