import { Filters, Paginations } from "./pagination";

export enum UserPaths {
  GetAllUsers = "/api/users",
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type Loading = "ready" | "pending" | "succeeded" | "failed";

export interface UserState {
  data: Array<User>;
  loading: Loading;
  error: string;
  filters: Filters;
  paginations: Paginations;
}

export interface UserResponse extends Paginations {
  data: Array<User>;
  support: {
    url: string;
    text: string;
  };
}
