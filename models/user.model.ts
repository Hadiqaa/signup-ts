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
      as: 'messages',
    });

    User.hasMany(models.Groups, {
      foreignKey: 'creator_id',
      as: 'groups',
    });

    User.hasMany(models.Attachments, {
      foreignKey: 'creator_id',
      as: 'attachments',
    });

    User.hasMany(models.Group_participants, {
      foreignKey: 'user_id',
      as: 'group_participants',
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
  }
);

export default User;