import React from "react";
import { Pagination } from "antd";

interface PaginationsProps {
  page: number;
  total: number;
  perPage: number;
  onChangePage?: (page: number) => void;
}

const Paginations: React.FC<PaginationsProps> = (props) => {
  const handleChangePage = (page: number) => {
    if (!props.onChangePage) return;
    props.onChangePage!(page);
  };

  return (
    <Pagination
      style={{ marginTop: 16 }}
      current={props.page}
      pageSize={props.perPage}
      total={props.total}
      onChange={handleChangePage}
    />
  );
};

export default Paginations;
