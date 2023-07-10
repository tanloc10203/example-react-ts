import React from "react";
import { Pagination } from "antd";

interface PaginationsProps {
  page: number;
  total: number;
}

const Paginations: React.FC<PaginationsProps> = (props) => (
  <Pagination
    style={{ marginTop: 16 }}
    defaultCurrent={1}
    pageSize={props.page}
    total={props.total}
  />
);

export default Paginations;
