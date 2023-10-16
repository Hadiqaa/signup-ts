import bcrypt from 'bcrypt';
import User from '../models/user.model';
import { Request, Response } from 'express';


interface AuthServiceInterface {
  signup(
    username: string,
    email: string,
    password: string
  ): Promise<{ id: number; username: string; email: string }>;
}

class AuthService implements AuthServiceInterface {
  async signup(
    username: string,
    email: string,
    password: string
  ): Promise<{ id: number; username: string; email: string }> {
    try {
      const hashpass = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        email,
        password: hashpass,
      });

      return {
        id: user.id,
        username: user.username,
        email: user.email,
      };
    } catch (error) {
      throw new Error('Error in signup');
    }
  }
}

export default new AuthService();

