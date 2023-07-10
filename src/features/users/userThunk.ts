import { createAsyncThunk } from "@reduxjs/toolkit";
import { userServices } from "~/services";
import { Filters } from "~/types";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (filters: Filters) => {
    try {
      const response = await userServices.getAllUsers(filters);
      return response;
    } catch (error) {
      console.log(`error getAllUsers`, error);

      // if(error instanceof AxiosError)
      // Promise.reject(ero)
    }
  }
);
