import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models'; // Assuming you have a Sequelize instance defined in a database file.

class Message extends Model {
  public id!: number;
  public senderId!: number;
  public receiverId!: number;
  public text!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Message.init(
  {
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
  }
);

const sendMessage = async (senderId: number, receiverId: number, text: string): Promise<Message> => {
  try {
    const message = await Message.create({
      senderId,
      receiverId,
      text,
    });
    return message;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Error sending message');
  }
};

const getGroupMessages = async (groupId: number): Promise<Message[]> => {
  try {
    const groupMessages = await Message.findAll({
      where: { group_id: groupId },
      order: [['createdAt', 'DESC']],
    });
    return groupMessages;
  } catch (error) {
    console.error('Error getting group messages', error);
    throw new Error('Error getting group messages');
  }
};

export { sendMessage, getGroupMessages };