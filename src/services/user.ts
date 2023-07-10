import { Filters, UserPaths, UserResponse } from "~/types";
import instance from "./axios";

const userServices = {
  getAllUsers: (filters: Filters): Promise<UserResponse> => {
    return instance.get(UserPaths.GetAllUsers, { params: filters });
  },
};

export default userServices;
