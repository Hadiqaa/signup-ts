import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}


class UserModel extends Model implements User {

  public id! : number;
  public username!: string;
  public email!: string;
  public password!: string;

}

UserModel.init(
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

export default UserModel;