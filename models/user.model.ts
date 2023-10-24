import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database';

interface UserModel { 
  id: number;
  username: string;
  email: string;
  password: string;
}


class User extends Model implements UserModel {

  public id! : number;
  public username!: string;
  public email!: string;
  public password!: string;


  public static associate(models: any): void {
    User.hasMany(models.Message, {
      foreignKey: 'sender_id',
      as: 'sent_message',
    });

    User.hasMany(models.Message, {
      foreignKey: 'receiver_id',
      as: 'received_message',
    });

    User.hasMany(models.Groups, {
      foreignKey: 'creator_id',
      as: 'group',
    });

    User.hasMany(models.Attachments, {
      foreignKey: 'creator_id',
      as: 'attachment',
    });

    User.hasMany(models.GroupMember, {
      foreignKey: 'user_id',
      as: 'groupmember',
    });
  }


}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  }
);

export default User;