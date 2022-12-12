import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IProject } from '../interfaces';

const CheckProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { title } = req.body;
  const findPrject: IProject | null = await prismaClient.project.findFirst({
    where: { title },
  });

  if (findPrject) {
    return res
      .status(statusCodes.OK)
      .json({ message: 'project already exists' });
  }
  next();
};

export { CheckProject };
