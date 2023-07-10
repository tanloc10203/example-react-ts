import { Skeleton, Space } from "antd";
import React from "react";
import "./GridItemUser.css";

const LoadingUser: React.FC = () => {
  return (
    <div className="user-item">
      <Space>
        <Skeleton.Button
          style={{ width: 80, height: 80 }}
          active
          size="large"
          shape="circle"
          block
        />
      </Space>

      <Skeleton.Input active size="small" style={{ margin: "16px 0" }} />
      <Skeleton.Input active size="small" />
      <div className="loading-btn">
        <Skeleton.Button
          active
          size="small"
          style={{ marginRight: 10 }}
          shape="circle"
          block
        />
        <Skeleton.Button active size="small" shape="circle" block />
      </div>
    </div>
  );
};

export default LoadingUser;
