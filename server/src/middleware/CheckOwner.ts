import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import statusCodes from 'http-status-codes';
import { IProject } from '../interfaces';

export const CheckOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const username = req.headers.username as string;
  const findPrject: IProject | null = await prismaClient.project.findFirst({
    where: { id, username },
  });
  if (!findPrject) {
    return res.status(statusCodes.NOT_FOUND).json({
      message: 'this owner has no permission or the project does not exists',
    });
  }
  next();
};
