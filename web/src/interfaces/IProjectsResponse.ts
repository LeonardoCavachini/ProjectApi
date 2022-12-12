import { IProject } from "./IProjects"

export interface IProjectResponse {
  code?: string
  project?: IProject[] | IProject
  message?: string
  title?: string
  zip_code?: number
  deadline?: Date
  cost?: number
  username?: string
}
