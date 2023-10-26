import attachmentService from "../services/attachment.service";
import { Request, Response } from "express";


interface CustomRequest extends Request {
    user?: any;
}
const createAttachment = async ( req : CustomRequest, res : Response) : Promise<void> => {
    try {
        const {file_Url, file_Name, message_id} = req.body;
        const user = req.user;

        if (!user) {
            console.error("User object is null or undefined.");
            res.status(500).json({ message: "Internal server error" });
          return;
        }

        const newattachment = await attachmentService.createAttachment(
            file_Url,
            file_Name,
            message_id,
            user?.id
        );
        console.log("creator_id here ", user.id)
    res.status(200).json({ message: 'Attachment creation successfull', data: newattachment });
    } catch (error:any) {
    console.error('Error creating attachment:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getAttachmentsbyID = async ( req: Request , res : Response) : Promise<void> => {
    try {

        const {message_id} = req.body;
        const getattachments = await attachmentService.getAttachmentsbyId(message_id);

    res.status(200).json({ message: 'Retrieving Attachment by ID successfull', data: getattachments });
    } catch (error:any) {

    console.error('Error  Error Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });

    }
};



export default {createAttachment, getAttachmentsbyID};