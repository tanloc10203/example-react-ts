import { Avatar, Button, Col, Typography } from "antd";
import { User } from "~/types";
import "./GridItemUser.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type GridItemUserProps = {
  item: User;
};

const GridItemUser = ({ item }: GridItemUserProps) => {
  return (
    <Col span={6} className="user-item gutter-row">
      <Avatar
        src={item.avatar}
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      />
      <Typography.Title className="user-item__fullName" level={5}>
        {`${item.last_name} ${item.first_name}`}
      </Typography.Title>
      <Typography.Text className="mb-2">{item.email}</Typography.Text>

      <div>
        <Button
          type="dashed"
          shape="circle"
          icon={<DeleteOutlined />}
          size="middle"
          className="mr-2"
          danger
        />

        <Button
          type="dashed"
          shape="circle"
          icon={<EditOutlined />}
          size="middle"
        />
      </div>
    </Col>
  );
};

export default GridItemUser;
