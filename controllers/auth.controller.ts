import { Request, Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  static async signup(req: Request, res: Response) {
    

    

    try {
        const { username, email, password } = req.body;
      const user = await AuthService.signup(username, email, password);
      console.log('Request Body:', req.body);
console.log('Request Headers:', req.headers);
    
      res.status(201).json({ user , status : 201}); 
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default AuthController;
