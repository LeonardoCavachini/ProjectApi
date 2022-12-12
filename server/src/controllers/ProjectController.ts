import { Request, Response } from 'express';
import { consultarCep } from 'correios-brasil';
import { ProjectService } from '../services';
import statusCodes from 'http-status-codes';

class ProjectController {
  private project: ProjectService;

  constructor() {
    this.project = new ProjectService();
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.getById = this.getById.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, zip_code, deadline, cost } = req.body;
      const username = req.headers.username;
      const stringUsername = username.toString();
      const response = await this.project.create(
        title,
        zip_code,
        deadline,
        cost,
        stringUsername,
      );
      res.status(statusCodes.CREATED).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  async get(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.project.get(req.headers.username as string);
      res.status(statusCodes.OK).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const response = await this.project.getById(id);
      const cep = response.zip_code.toString();
      const city = await consultarCep(cep).then(response => response['data']);
      const projectData = {
        id: response.id,
        title: response.title,
        zip_code: `${city.localidade} ${city.uf}`,
        cost: response.cost,
        done: response.done,
        deadline: response.deadline,
        username: response.username,
        created_at: response.created_at,
        updated_at: response.updated_at,
      };
      res.status(statusCodes.OK).json(projectData);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  async put(req: Request, res: Response): Promise<void> {
    try {
      const { title, zip_code, deadline, cost } = req.body;
      const { id } = req.params;
      const response = await this.project.put(
        id,
        title,
        zip_code,
        deadline,
        cost,
      );
      res.status(statusCodes.OK).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  async patch(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await this.project.patch(id);
      res.status(statusCodes.OK).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const response = await this.project.delete(id);
      res.status(statusCodes.OK).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
}

export default ProjectController;
