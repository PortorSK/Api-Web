// authController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../db';
import { users } from '../entities/user';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function login(req: Request, res: Response): Promise<Response> {
  const { correoElectronico, contrasena } = req.body;

  try {
    // Obtén el usuario por su correo electrónico
    const user = await AppDataSource.manager.findOne(users, { where: { correoElectronico } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    var passwordMatch = true
    // Verifica la contraseña
    if(contrasena==user.contrasena)
    {
        passwordMatch = true
    }
    else
    {
        passwordMatch = false
    }

    if (passwordMatch==false) {
      return res.status(401).json({ message: contrasena+" "+user.contrasena});
    }

    // Genera el token JWT
    const token = jwt.sign({ userId: user.id }, 'tu_secreto', { expiresIn: '1h' });

    // Devuelve el token como respuesta
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error });
  }
}
