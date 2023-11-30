// userController.ts
import { Request, Response } from 'express';
import { userService } from '../services/userService';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userId = parseInt(id, 10);
      const user = await userService.getUserById(userId);

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userId = parseInt(id, 10);
      const updatedUser = await userService.updateUser(userId, req.body);

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.json(updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userId = parseInt(id, 10);
      const success = await userService.deleteUser(userId);

      if (!success) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

export const userController = new UserController();
