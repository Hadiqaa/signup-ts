import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models'; // Assuming you have a Sequelize instance defined in a database file.
import Message from '../models/message.model';


const sendMessage = async (senderId: number, receiverId: number, text: string, group_id?:number):Promise<Message>=>  {
  console.log("==============>", senderId, receiverId);
  try {
    if (group_id) {
    
    const message = await Message.create({
      sender_id: senderId,
      group_id,  
      text,
      });
      return message;

  } else {

    const message = await Message.create({
      sender_id : senderId,
      reciever_id: receiverId,
      text,
      });
      return message;
  } 

  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};




const getMessagesForGroup = async (group_id: number): Promise<Message[]> => {
  try {
    const messages = await Message.findAll({
      where: { group_id },
      // order: [['createdAt', 'DESC']], 
    });

    return messages;
  } catch (error) {
    console.error('Error retrieving messages for the group', error);
    throw error;
  }
};


const getMessagesBetweenUsers = async (senderId: number, receiverId: number): Promise<Message[]> => {
  try {
    const messages = await Message.findAll({
      where: {
        sender_id: senderId,
        reciever_id: receiverId,
        // order: [['createdAt', 'DESC']],
      },
    });

    return messages;
  } catch (error) {
    console.error('Error retrieving messages between users', error);
    throw error;
  }
};





export default{ sendMessage, getMessagesForGroup, getMessagesBetweenUsers };