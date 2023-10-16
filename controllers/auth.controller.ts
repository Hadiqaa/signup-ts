import { Request, Response } from "express";
import AuthService from "../services/auth.service";

interface AuthControllerInterface {
  signup(req: Request, res: Response): Promise<void>;
}

class AuthController implements AuthControllerInterface {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;
      const user = await AuthService.signup(username, email, password);
  
      const response = {
        user,
        status: 201,
      };
      res.status(201).json(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new AuthController();