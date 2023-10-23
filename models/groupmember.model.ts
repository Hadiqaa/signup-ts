import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database';


interface GroupMemberModelAttributes {
    id:number;
    group_id: number;
    user_id: number;
  }

  class GroupMember extends Model implements GroupMemberModelAttributes {

   public id! : number;
   public group_id!: number;
   public user_id!: number;


   public static associate(models: any): void {

    GroupMember.belongsTo(models.Groups, {
        foreignKey: 'group_id',
        as: 'groups',
      });
  
    GroupMember.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
  }

  };

  GroupMember.init ( 
    {
        group_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
    } , {
    sequelize,
    modelName: 'GroupMember',
    }
  );

  export default GroupMember;