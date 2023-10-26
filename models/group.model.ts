import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';


interface GroupModelAttributes {
    id:number;
    group_name: string;
    creator_id: number;
  }

  class Group extends Model implements GroupModelAttributes {

   public id! : number;
   public group_name!: string;
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

    Group.hasMany(models.GroupMember, {
        foreignKey: 'group_id',
        as: 'GroupMember',
        onDelete: 'CASCADE'
        
      });
  }

  };

  Group.init ( 
    {
        group_name:{
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