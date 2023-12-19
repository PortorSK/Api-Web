// userController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../db';
import { users } from '../entities/user';


export async function getUsers(req: Request, res: Response): Promise<Response> {
  try {
    const Users = await AppDataSource.manager.find(users);
    return res.json(Users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un problema al obtener los usuarios pendejo.", error: error });
  }
}


export async function getUserById(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  try {
    const userId = parseInt(id, 10);
    const user = await AppDataSource.manager.findOne(users, { where: { id: userId } });

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un problema al obtener el usuario.", error: error });
  }
}

export async function createUser(req: Request, res: Response): Promise<Response> {
  const { nombre, correoElectronico, contrasena, usuarioCreacion, usuarioActualizacion, estadocivil, edad} = req.body;

  if (!nombre || !correoElectronico || !contrasena) {
    return res.status(400).json({ message: "Nombre, correo electrónico y contraseña son requeridos." });
  }

  try {
    const newUser = new users();
    newUser.nombre = nombre;
    newUser.correoElectronico = correoElectronico;
    newUser.contrasena = contrasena;
    newUser.usuarioCreacion = usuarioCreacion;
    newUser.usuarioActualizacion = usuarioActualizacion;
    newUser.activo = true;
    newUser.estadocivil = estadocivil;
    newUser.edad = edad;

    const user = await AppDataSource.manager.save(newUser);
    return res.status(201).json({ message: "Usuario creado correctamente", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un problema al crear el usuario.", error: error });
  }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { nombre, correoElectronico, contrasena, usuarioCreacion, usuarioActualizacion, estadocivil, edad} = req.body;

  if (!id || !nombre || !correoElectronico || !contrasena) {
    return res.status(400).json({ message: "ID, nombre, correo electrónico y contraseña son requeridos." });
  }

  try {
    const userId = parseInt(id, 10);
    const user = await AppDataSource.manager.findOne(users, { where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    user.nombre = nombre;
    user.correoElectronico = correoElectronico;
    user.contrasena = contrasena;
    user.usuarioCreacion = usuarioCreacion;
    user.usuarioActualizacion = usuarioActualizacion;
    user.activo = true;
    user.estadocivil = estadocivil;
    user.edad = edad;

    await AppDataSource.manager.save(user);
    return res.status(200).json({ message: "Usuario actualizado correctamente", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un problema al actualizar el usuario.", error: error });
  }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }

  try {
    const userId = parseInt(id, 10);
    const user = await AppDataSource.manager.findOne(users, { where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    await AppDataSource.manager.remove(user);
    return res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un problema al eliminar el usuario.", error: error });
  }
}
