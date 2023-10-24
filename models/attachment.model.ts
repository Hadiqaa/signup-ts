import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';


interface AttachmentModelAttributes {
    id:number;
    file_Url: string;
    file_Name: string;
    message_id: number;
    creator_id: number;
  }

  class Attachments extends Model implements AttachmentModelAttributes {

   public id! : number;
   public file_Url!: string;
   public file_Name!: string;
   public message_id!: number;
   public creator_id!: number;



   public static associate(models: any): void {
    Attachments.belongsTo(models.User, {
        foreignKey: 'creator_id',
        as: 'user',
      });
  
    Attachments.belongsTo(models.Message, {
        foreignKey: 'message_id',
        as: 'message',
      });

  }

  };

  Attachments.init ( 
    {
        file_Url:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        file_Name:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        message_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },  
        creator_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    } , {
    sequelize,
    modelName: 'Attachments',
    tableName: 'Attachment'
    }
  );

  export default Attachments;