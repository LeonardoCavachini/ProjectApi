import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IUser } from '../interfaces';

const MESSAGE_FIELD = 'All fields must be filled';
const MESSAGE_USERNAME =
  'Please use this pattern { username: paulo.silva } on the usernname field ';
const MESSAGE_NAME =
  'Please use this pattern { name: Paulo Silva } on the name field';

const validateUserName = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const regexName = /[A-Z][a-z]* [A-Z][a-z]*/;
  const regexUsername = /\b[a-z]+\.+\b[a-z][a-z]/;

  const { name, username } = req.body;
  const searchUser: IUser | null = await prismaClient.user.findFirst({
    where: { username, name },
  });

  if (!username || username === undefined || !name || name === undefined) {
    return res.status(statusCodes.OK).json({ message: MESSAGE_FIELD });
  } else if (!regexName.test(name)) {
    return res.status(statusCodes.OK).json({ message: MESSAGE_NAME });
  } else if (!regexUsername.test(username)) {
    return res.status(statusCodes.OK).json({ message: MESSAGE_USERNAME });
  } else if (searchUser) {
    return res.status(statusCodes.OK).json({ message: 'user already exists' });
  }
  next();
};

export { validateUserName };
