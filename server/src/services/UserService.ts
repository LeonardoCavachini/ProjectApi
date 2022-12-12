import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IUserResponse, IUser } from '../interfaces';
import Token from '../auth/createTokenJWT';

class UserService {
  private createToken = Token.createToken;

  async register(name: string, username: string): Promise<IUserResponse> {
    const user = await prismaClient.user.create({
      data: {
        name,
        username,
      },
    });
    return user;
  }
  async login(value: IUser): Promise<IUserResponse> {
    const { username } = value;

    const token = this.createToken(username);

    return { code: statusCodes.OK, token };
  }
}

export default UserService;
