import React from 'react';

const Icon = ({ icon }: any) => {
  return (
    <div>
      <div>{icon.name}</div>
      <div>{icon.url}</div>
    </div>
  );
};

const IconList = () => {
  const icons = [
    {
      name: 'stack',
      url: './svg/stack.svg',
    },
    {
      name: 'login_kakao',
      url: './svg/login_kakao_logo.svg',
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
