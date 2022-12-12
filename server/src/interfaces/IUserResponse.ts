import { StatusCodes } from 'http-status-codes';
import { IUser } from './IUser';

export interface IUserResponse {
  code?: StatusCodes;
  user?: IUser;
  id?: string;
  password?: string;
  username?: string;
  name?: string;
  message?: string;
  token?: string;
}
