import { Request, Response } from 'express';
import userService from '../services/user.service';

const updateUsername = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId);
    const { newUsername } = req.body;
    const updatedUser = await userService.updateName(userId, newUsername);

    res.status(200).json(updatedUser);
  } catch (error :any) {
    console.error('Error in updateUsername:', error);
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users); 
  } catch (error :any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default{ updateUsername, getUsers };