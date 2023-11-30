import * as jwt from 'jsonwebtoken';

class AuthService {
  private secretKey = 'tu_clave_secreta'; // Reemplaza esto con una clave segura en un entorno de producción

  generateToken(userId: number): string {
    const token = jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' }); // Token expira en 1 hora
    return token;
  }

  verifyToken(token: string): { userId: number } | null {
    try {
      const decoded = jwt.verify(token, this.secretKey) as { userId: number };
      return decoded;
    } catch (error) {
      console.error('Error al verificar token:', error);
      return null;
    }
  }
}

export const authService = new AuthService();
