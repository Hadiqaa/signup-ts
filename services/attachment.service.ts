import Attachments  from '../models/attachment.model';


const createAttachment = async (
    file_Url: string,
    file_Name: string,
    message_id: number,
    creator_id: number,)   : Promise<Attachments> => {

 try {
    const attachment = await Attachments.create({
        file_Url,
        file_Name,
        message_id,
        creator_id
    });
  return attachment;
 } catch ( error: any ) {
        console.error('Error in Creating an attachment', error);
        throw error;
 }

};

const getAttachmentsbyId = async ( message_id : number) : Promise <Attachments[]> => {
    try {

        const getAttachments = await Attachments.findAll({
            where : {message_id}
        });

        return getAttachments;

    } catch ( error) {

        console.error('Error in Creating an attachment', error);
        throw error;
    }
}


export default {createAttachment , getAttachmentsbyId};