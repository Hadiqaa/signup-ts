import { Request, Response } from "express";
import AuthService from "../services/auth.service";

const signup = async (req: Request, res: Response): Promise<void> => {
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
};



const login = async (req : Request , res : Response) : Promise <void> => {
try {
  const {email, password } = req.body;
  
  const {user , token} = await AuthService.loginUser(email, password);
  res.status(200).json({ user, token, status: 200 });
} catch(error : any) {
  res.status(400).json({ error: error.message });
}

};

export default { signup , login};