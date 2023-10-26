import  GroupMember from '../models/groupmember.model'; 
import Group from '../models/group.model';
const addMemberToGroup = async (group_id: number, user_id: number): Promise<void> => {
  try {
    const group = await Group.findByPk(group_id);

    if (!group) {
        throw new Error('Group not found');
      }

    const existingMember = await GroupMember.findOne({
        where: { group_id, user_id },
      });
  
      if (existingMember) {
        throw new Error('User is already a member of the group');
      }

    await GroupMember.create({ group_id, user_id });
  } catch (error) {
    console.error('Error adding a member to the group', error);
    throw error;
  }
};


const removeMemberFromGroup = async (group_id: number, user_id: number): Promise<void> => {
    try {
  
        await GroupMember.destroy({
            where:{user_id, group_id},
        })
    } catch (error) {
      console.error('Error removing  member from the group', error);
      throw error;
    }
  };


export default {addMemberToGroup, removeMemberFromGroup};