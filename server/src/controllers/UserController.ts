import { Request, Response } from 'express';
import { IUser } from 'interfaces';
import { UserService } from '../services';
import statusCodes from 'http-status-codes';

class UserController {
  private user: UserService;

  constructor() {
    this.user = new UserService();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, username } = req.body;
      const response = await this.user.register(name, username);
      res.status(statusCodes.CREATED).json(response);
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }

  async login(req: Request, res: Response) {
    const input: IUser = req.body;
    const login = await this.user.login(input);

    if (login.message) {
      return res.status(login.code).json({ message: login.message });
    }

    res.status(statusCodes.OK).json(login);
  }
}

export default UserController;
