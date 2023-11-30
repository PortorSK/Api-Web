// userService.ts
import { getRepository } from 'typeorm';
import { User } from '../entities/user';

class UserService {
  async getAllUsers(): Promise<User[]> {
    const userRepository = getRepository(User);
    return await userRepository.find();
  }

  async getUserById(id: number): Promise<User | null> {
    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOne({ where: { id } });

      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error; // Re-lanzar el error para que sea manejado por la capa superior
    }
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(userData);
    return await userRepository.save(newUser);
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User | null> {
    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOne({ where: { id } });

      if (!user) {
        return null;
      }

      userRepository.merge(user, userData);
      return await userRepository.save(user);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error; // Re-lanzar el error para que sea manejado por la capa superior
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOne({ where: { id } });

      if (!user) {
        return false;
      }

      await userRepository.remove(user);
      return true;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error; // Re-lanzar el error para que sea manejado por la capa superior
    }
  }

  // Puedes agregar más funciones según sea necesario
}

export const userService = new UserService();
