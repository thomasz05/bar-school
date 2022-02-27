import { NextApiRequest, NextApiResponse } from "next"

export default function Auth(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return
    }
    res.status(400).json({
        success: false,
        code: "method.not-allowed"
    })
}
