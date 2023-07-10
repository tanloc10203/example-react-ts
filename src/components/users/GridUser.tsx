import { Row } from "antd";
import { User } from "~/types";
import GridItemUser from "./GridItemUser";

type GridUserProps = {
  data: Array<User>;
};

const GridUser = ({ data }: GridUserProps) => {
  return (
    <Row gutter={[8, 8]}>
      {data.map((item) => (
        <GridItemUser key={item.id} item={item} />
      ))}
    </Row>
  );
};

export default GridUser;
