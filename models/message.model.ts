import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';

interface MessageModelAttributes {
    id:number;
    text: string;
    sender_id: number;
    reciever_id: number;
    group_id: number;
  }

  class Message extends Model implements MessageModelAttributes {

   public id! : number;
   public text!: string;
   public sender_id!: number;
   public reciever_id!: number;
   public group_id!: number;

   public static associate(models: any): void {
    Message.belongsTo(models.User, {
      foreignKey: 'sender_id',
      as: 'user',
    });

    Message.hasMany(models.Attachments, {
      foreignKey: 'message_id',
      as: 'attachments',
    });

    Message.belongsTo(models.Groups, {
      foreignKey: 'group_id',
      as: 'groups',
    });
  }

  };

  Message.init ( 
    {
        text:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        sender_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        reciever_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        group_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    } , {
    sequelize,
    modelName: 'Message',
    }
  );

  export default Message;