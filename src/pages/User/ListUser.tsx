import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/apps";
import { GridUser, Page, Paginations } from "~/components";
import {
  dataUserSelector,
  filterUserSelector,
  getAllUsers,
  paginationSelector,
} from "~/features";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterUserSelector);
  const paginations = useAppSelector(paginationSelector);
  const data = useAppSelector(dataUserSelector);

  useEffect(() => {
    dispatch(getAllUsers(filters));
  }, [filters]);

  return (
    <Page title="Danh sách người dùng">
      <GridUser data={data} />
      <Paginations page={paginations.page} total={paginations.total_pages} />
    </Page>
  );
};

export default ListUser;
