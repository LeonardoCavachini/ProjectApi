import { StatusCodes } from 'http-status-codes';
import { IProject } from './IProject';

export interface IProjectResponse {
  code?: StatusCodes;
  project?: IProject[] | IProject;
  message?: string;
  title?: string;
  zip_code?: number;
  deadline?: Date;
  cost?: number;
  username?: string;
}
