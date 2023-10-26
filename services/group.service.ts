import Group from '../models/group.model';
import GroupMember from '../models/groupmember.model';
import GroupMemberService from '../services/groupmember.service'
import Message from '../models/message.model';
import User from '../models/user.model';

const createGroup = async (creator_id: number,group_name: string, ): Promise<Group> => {
    try {
      console.log("creatorID", creator_id);
      const group = await Group.create({
         creator_id,
        group_name,
      });
      await GroupMemberService.addMemberToGroup(group.id, creator_id);
      return group;
    } catch (error) {
      console.error('Error in Creating a group', error);
      throw  error;
    }
  };


  const getUsersOfGroup = async (group_id: number): Promise<User[]> => {
    try {
      // Find all GroupMembers associated with the group and get their user IDs
      const groupMembers = await GroupMember.findAll({
        where: { group_id },
        attributes: ['user_id'], // Only retrieve the user_id
      });
  
      // Extract the user_ids from groupMembers
      const userIDs = groupMembers.map((entry) => entry.user_id);
  
      // Query the User model to get the user details based on user IDs
      const users = await User.findAll({
        where: { id: userIDs },
      });
  
      return users;
    } catch (error) {
      console.error('Error showing users of group', error);
      throw error;
    }
  };


  const deleteGroup = async (group_id: number ): Promise<void>  => {
    try {

    await GroupMember.destroy({
        where: { group_id },
    });  

    await Message.destroy({
      where: { group_id },
    });

    const deleteGroup = await Group.destroy({
      where: { id : group_id },
    });
   
    if (!deleteGroup) {
      throw new Error('Group not found');
    }

    } catch (error) {
      console.error('Error in deleting  a group', error);
      throw  error;
    }
  };
  


  export default {createGroup , deleteGroup, getUsersOfGroup};