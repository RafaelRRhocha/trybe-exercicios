import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import * as Interfaces from '../interfaces';

const getAllModels = async (): Promise<Interfaces.IUsers[]> => {
  const result = await connection.execute('SELECT * FROM Users');
  const [rows] = result;
  return rows as Interfaces.IUsers[];
}

const getByIdModels = async (id: number): Promise<Interfaces.IUsers> => {
  const result = await connection.execute('SELECT * FROM Users WHERE id=?', [id]);
  const [rows] = result;
  const [book] = rows as Interfaces.IUsers[];
  return book;
}

const createModels = async (user: Interfaces.IUsers): Promise<Interfaces.IUsers> => {
  const { id, name, email, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (id, name, email, password) VALUES (?, ?, ?, ?)',
    [id, name, email, password],
  );
  return {
    id: insertId,
    name,
    email,
    password,
  };
}

const updateModels = async(id: number, user: Interfaces.IUsers) => {
  const { name, email, password } = user;

  const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
  const values = [name, email, password, id];

  await connection.execute(query, values);

  return { id, name, email, password };
}

const removeModels = async(id: number): Promise<Interfaces.IUsers | null> => {
  const userToBeDeleted = await getByIdModels(id);
  if (!userToBeDeleted) return null;

  const query = 'DELETE FROM Users WHERE id = ?';
  const values = [id];

  await connection.execute(query, values);

  return userToBeDeleted;
}

module.exports = {
  getAllModels,
  getByIdModels,
  createModels,
  updateModels,
  removeModels,
}