import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IProject } from '../interfaces';

const CheckProjectId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const findPrject: IProject | null = await prismaClient.project.findUnique({
    where: { id },
  });

  if (!findPrject) {
    return res
      .status(statusCodes.OK)
      .json({ message: 'project does not exists' });
  }
  next();
};

export { CheckProjectId };
