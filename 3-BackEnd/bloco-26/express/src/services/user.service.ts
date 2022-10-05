const getUsers = require('../models/user.model');
import jwt from 'jsonwebtoken';
require('dotenv').config();
import * as Interfaces from '../interfaces';
const secret = 'jwtSecret';

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

const getAllUsersService = async () => {
  const users = await getUsers.getAllModels();
  return users;
};

const getByIdService = async () => {
  const users = await getUsers.getByIdModels();
  return users;
};

const createUsersService = async (user: Interfaces.IUsers[]) => {
  const users = await getUsers.createModels(user);
  return users;
};

async function updateUsersService(id: number, user: Interfaces.IUsers, token: string) {
  const { payload } = jwt.verify(token, secret) as Interfaces.IToken;
  if (payload.id !== id) {
    return { status: 403, error: { message: MESSAGES.FORBIDDEN } };
  }
  const userExists = await getUsers.getById(id);
  if (!userExists) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }

  const data = await getUsers.update(id, user);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }
  return { status: 200, data };
}

export async function removeUsersService(id: number, token: string) {
  const { payload } = jwt.verify(token, secret) as Interfaces.IToken;
  if (payload.id !== id) {
    return { status: 403, error: { message: MESSAGES.FORBIDDEN } };
  }
  const data = await getUsers.remove(id);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }
  return { status: 200, data };
}

module.exports = {
  getAllUsersService,
  getByIdService,
  createUsersService,
  updateUsersService,
  removeUsersService,
}