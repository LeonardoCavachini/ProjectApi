import { prismaClient } from '../database/prismaClient';
import { IProjectResponse } from '../interfaces';

class ProjectService {
  async create(
    title: string,
    zip_code: number,
    deadline: Date,
    cost: number,
    username: string,
  ): Promise<IProjectResponse> {
    const project = await prismaClient.project.create({
      data: {
        title,
        zip_code,
        deadline,
        cost,
        username,
      },
    });
    return project;
  }
  async get(username: string): Promise<any> {
    const projects = await prismaClient.project.findMany({
      where: {
        username,
      },
    });
    return projects;
  }
  async getById(id: string): Promise<any> {
    const projects = await prismaClient.project.findFirst({
      where: {
        id,
      },
    });
    return projects;
  }
  async put(
    id: string,
    title: string,
    zip_code: number,
    deadline: Date,
    cost: number,
  ): Promise<any> {
    const projects = await prismaClient.project.update({
      where: {
        id,
      },
      data: {
        title,
        zip_code,
        deadline,
        cost,
      },
    });
    return projects;
  }
  async patch(id: string): Promise<any> {
    const projects = await prismaClient.project.update({
      where: {
        id,
      },
      data: {
        done: true,
      },
    });
    return projects;
  }
  async delete(id: string): Promise<any> {
    const projects = await prismaClient.project.delete({
      where: {
        id,
      },
    });
    return projects;
  }
}

export default ProjectService;
