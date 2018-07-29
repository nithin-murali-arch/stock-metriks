import { IDemat } from "./demat";

export interface IUser {
  createdTime: Date,
  lastUpdatedTime: Date,
  emailid: string;
  password: string;
  demat?: [IDemat];
};