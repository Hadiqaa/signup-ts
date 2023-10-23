import { Request, Response } from 'express';
import * as  MessageService from '../services/message.service';

 const sendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { senderId, receiverId, text } = req.body;

    const message = await MessageService.sendMessage(senderId, receiverId, text);

    res.status(200).json({ message: 'Message sent successfully', data: message });
  } catch (error:any) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

 const getGroupMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { group_id } = req.body;
    const groupMessages = await MessageService.getGroupMessages(group_id);

    res.status(200).json({ message: 'yayy successss', data: groupMessages });
  } catch (error:any) {
    console.error('Ughhh !! Error', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { sendMessage, getGroupMessages };