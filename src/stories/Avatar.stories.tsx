import React from "react";
import Avatar from "../component/Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
      <div
        className="avatar-container"
        style={{ width: 40, height: 40, marginBottom: 4 }}
        key={id}
      >
        <Avatar src={null} userId={id} name={"홍길동"} />
      </div>
    ))}
  </div>
);
