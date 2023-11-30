// authController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
  async login(req: Request, res: Response) {
    const { correoElectronico, contraseña } = req.body;

    // Obtén el usuario por su correo electrónico
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { correoElectronico } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera el token JWT
    const token = jwt.sign({ userId: user.id }, 'tu_secreto', { expiresIn: '1h' });

    // Devuelve el token como respuesta
    res.json({ token });
  }
}

export const authController = new AuthController();
