import type { NextApiRequest, NextApiResponse } from 'next'
import Model from './model'
import connectDB from "./connectDb";


async function handler (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    if (req.method === 'POST') {
        try {
            const partner = Model({...JSON.parse(req.body)})
            await partner.save()
             res.status(200).json({status: 1})
        }catch (e) {
            res.status(500).json({status: 0})
            throw new Error(e)
        }
    }  
        if(req.method === 'GET') {
            const phone = req.query?.phone
            const partner =  await Model.findOne({phone})
            res.status(200).json({data: partner})
        }
}

export default connectDB(handler)