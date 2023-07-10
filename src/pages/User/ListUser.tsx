import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/apps";
import { GridUser, LoadingGridUser, Page, Paginations } from "~/components";
import {
  dataUserSelector,
  filterUserSelector,
  getAllUsers,
  loadingUserSelector,
  paginationSelector,
  userActions,
} from "~/features";

const ListUser = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(filterUserSelector);
  const paginations = useAppSelector(paginationSelector);
  const loading = useAppSelector(loadingUserSelector);
  const data = useAppSelector(dataUserSelector);

  useEffect(() => {
    dispatch(getAllUsers(filters));
  }, [filters]);

  const handleChangePage = (page: number) => {
    dispatch(userActions.setFilters({ ...filters, page }));
  };

  return (
    <Page title="Danh sách người dùng">
      {loading === "pending" ? (
        <LoadingGridUser perPage={filters.per_page} />
      ) : (
        <>
          <GridUser data={data} />

          <Paginations
            onChangePage={handleChangePage}
            page={paginations.page}
            perPage={paginations.per_page}
            total={paginations.total}
          />
        </>
      )}
    </Page>
  );
};

export default ListUser;
