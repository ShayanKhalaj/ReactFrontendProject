import fs from 'fs'
import path from 'path';

export default async function handler(req,res){
    console.log(path.join(process.cwd(),'public',req.body.filePath))
    if(!fs.existsSync(path.join(process.cwd(),'public',req.body.filePath))){
        return res.status(200).json({message:'file does not exist',success:true})
    }
    else{
        fs.unlinkSync(path.join(process.cwd(),'public',req.body.filePath))
        return res.status(200).json({message:'file unlinked',success:true})
    }
}