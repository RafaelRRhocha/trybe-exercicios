const getUsersFromService = require('../services/user.service');
import { Request, Response } from 'express';
import * as Interfaces from '../interfaces';

const getAllUsers = async (_req: Request, res: Response) => {
  const users = await getUsersFromService.getAllUsersService();
  return res.status(200).json(users);
};

const getAllById = async (req: Request, res: Response) => {
  const users = await getUsersFromService.getAllSalesServiceById(req.params.id);
  if (users.length < 1) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(users);
};

const createUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromService.createUsersService(req.body);
  return res.status(201).json(users);
};

const updateUsers = async(req: Request, res: Response) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  const { id } = req.params;
  const user = req.body as Interfaces.IUsers;

  const { status, data, error } = await getUsersFromService.updateUsersService(
    Number(id),
    user,
    token as string,
  );

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

const removeUsers = async (req: Request, res: Response) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }
  const { id } = req.params;
  const { status, data, error } = await getUsersFromService.removeUsersService(
    Number(id),
    token as string,
  );

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

module.exports = {
  getAllUsers,
  getAllById,
  createUsers,
  updateUsers,
  removeUsers,
}