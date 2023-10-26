import { Request, Response } from 'express';
import  MessageService from '../services/message.service';

interface CustomRequest extends Request {
  user?: any;
}

 const sendMessage = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    console.log('request.body here...');
    console.log(req.body);
    const { receiverId, text, group_id } = req.body;
    const user = req.user;

    const message = await MessageService.sendMessage(user?.dataValues?.id, receiverId, text, group_id);

    res.status(200).json({ message: 'Message sent successfully', data: message });
  } catch (error:any) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

 const getGroupMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { group_id } = req.body;
    const groupMessages = await MessageService.getMessagesForGroup(group_id);

    res.status(200).json({ message: 'Messages retrieved succesfully', data: groupMessages });
  } catch (error:any) {
    console.error('Ughhh !! Error', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getMessagesOfUsers = async ( req : CustomRequest , res : Response) : Promise<void> => {

  try {
     const  {recieverId} = req.body;
     const user = req.user;
     const getmessages = await MessageService.getMessagesBetweenUsers(user?.dataValues?.id, recieverId);

     res.status(200).json({ message: 'Messages retrieved succesfully', data: getmessages });
  } catch ( error : any ) {

    console.error('Error getting messages:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { sendMessage, getGroupMessages, getMessagesOfUsers };