import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IUser } from '../interfaces';

const CheckUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, username } = req.body;
  const searchUser: IUser | null = await prismaClient.user.findFirst({
    where: { username, name },
  });

  if (!searchUser) {
    return res
      .status(statusCodes.OK)
      .json({ message: 'Incorrect name or username' });
  }
  next();
};

export { CheckUser };
