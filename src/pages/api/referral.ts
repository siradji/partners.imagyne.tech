import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from './connectDb'
import Model from './model'

async function handler (req: NextApiRequest, res: NextApiResponse): Promise<any> {
    if (req.method === 'GET') {
       try {
        const phone = req.query?.phone
        await Model.findOneAndUpdate({phone}, {$inc: {referrals:  1}})
        res.status(200).json({status: 1})
       } catch (error) {
        console.log(error);
        
       }
    }
}


export default connectDB(handler)