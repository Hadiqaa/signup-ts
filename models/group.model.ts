import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';


interface GroupModelAttributes {
    id:number;
    groupname: string;
    creator_id: number;
  }

  class Group extends Model implements GroupModelAttributes {

   public id! : number;
   public groupname!: string;
   public creator_id!: number;


   public static associate(models: any): void {
    Group.hasMany(models.Message, {
        foreignKey: 'group_id',
        as: 'message',
      });
  
    Group.belongsTo(models.User, {
        foreignKey: 'creator_id',
        as: 'user',
      });
  }

  };

  Group.init ( 
    {
        groupname:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        creator_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    } , {
    sequelize,
    modelName: 'Group',
    tableName: 'Group'
    }
  );

  export default Group;