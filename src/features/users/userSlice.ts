import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Filters, UserState } from "~/types";
import { getAllUsers } from "./userThunk";
import { RootState } from "~/apps";

const initialState: UserState = {
  data: [],
  loading: "ready",
  error: "",
  filters: {
    page: 1,
    per_page: 6,
  },
  paginations: {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilters: (state, { payload }: PayloadAction<Filters>) => {
      state.filters = { ...payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.data = payload?.data!;
      state.paginations = {
        page: payload?.page!,
        per_page: payload?.per_page!,
        total: payload?.total!,
        total_pages: payload?.total_pages!,
      };
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;

export const filterUserSelector = (state: RootState) => state.user.filters;
export const paginationSelector = (state: RootState) => state.user.paginations;
export const loadingUserSelector = (state: RootState) => state.user.loading;
export const dataUserSelector = (state: RootState) => state.user.data;

export default userReducer;
