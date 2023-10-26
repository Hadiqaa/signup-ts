import GroupService from "../services/group.service";
import { Request, Response } from "express";

interface CustomRequest extends Request {
    user?: any;
  }

const createGroup = async (req : CustomRequest , res : Response) : Promise<void> => {

  try {

    console.log("hello hello",req.body);
    const { group_name  } = req.body;
    const user = req.user;

      if (!user) {
        console.error("User object is null or undefined.");
        res.status(500).json({ message: "Internal server error" });
      return;
      }
    const group = await GroupService.createGroup(user?.id , group_name );
    console.log("userid here",user.id);

    res.status(200).json({ message: 'Group chat created successfully', data: group });

  } catch (error:any) {

    res.status(500).json({ message: ' Internal server error', error: error.message });
  }
};




const deletegroup = async (req : Request , res : Response) : Promise<void> => {

  try {
   
  const { group_id } = req.body;
  await GroupService.deleteGroup(group_id);
  console.log("group id here " , group_id);
     
   res.status(200).json({ message: 'Group chat deleted successfully' });

  } catch (error:any) {

  res.status(500).json({ message: ' Internal server error', error: error.message });
  }
};



const getUsersOfGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { group_id } = req.params; 
    const users = await GroupService.getUsersOfGroup(parseInt(group_id, 10)); 

    res.status(200).json({ users });

  } catch (error:any) {

    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};






export default {createGroup, deletegroup, getUsersOfGroup};