import { sign } from 'jsonwebtoken';
import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

const handler = async (req: _NextApiRequest, res: _NextApiResponse) => {
  const {
    method,
    body: { email, password },
  } = req;

  switch (method) {
    case 'POST':
      if (email && password) {
        const user = await req.prisma.user.findUnique({
          where: { email },
        });
        if (!user || password !== user.password) {
          return res.status(401).json({ message: 'Unauthorized!' });
        }
        return res.json({
          token: sign(
            {
              id: user.id,
              email,
            },
            process.env.JWT_SECRET
          ),
        });
      } else {
        return res.status(401).json({ error: 'Insufficient Information!' });
      }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default middleware(handler);
