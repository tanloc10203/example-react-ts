import { Col, Row } from "antd";
import LoadingUser from "./LoadingUser";

type LoadingGridUserProps = {
  perPage: number;
};

const LoadingGridUser = ({ perPage }: LoadingGridUserProps) => {
  return (
    <Row gutter={[8, 8]}>
      {[...Array(perPage)].map((_, index) => (
        <Col key={index} span={6}>
          <LoadingUser />
        </Col>
      ))}
    </Row>
  );
};

export default LoadingGridUser;
