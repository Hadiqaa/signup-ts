import GroupMember from "models/groupmember.model";
import GroupMemberService from "../services/groupmember.service"
import { Request, Response } from "express";

const addMemberToGroup = async (req : Request , res : Response) : Promise<void> => {

    try {
         const {group_id, user_id} = req.body;
         const groupmember = await GroupMemberService.addMemberToGroup(group_id, user_id);

    
    res.status(200).json({ message: 'Member Added in the group', data: groupmember });
        }


    catch (error:any) {

    res.status(500).json({ message: ' Internal server error', error: error.message });
    }
};



const removeMemberFromGroup = async (req : Request , res : Response) : Promise<void> => {

    try {
    const {user_id, group_id} = req.body;
    await GroupMemberService.removeMemberFromGroup(user_id, group_id);
    res.status(200).json({ message: 'User removed from the group' });
    
    }


    catch (error:any) {

    res.status(500).json({ message: ' Internal server error', error: error.message });
    }
};


export default {addMemberToGroup, removeMemberFromGroup};
