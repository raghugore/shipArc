import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

async function handler(req: _NextApiRequest, res: _NextApiResponse) {
  const {
    method,
    body: { name, phone },
    user,
  } = req;

  if (!user) {
    return res.status(401).json({ message: 'Please login!' });
  }

  switch (method) {
    case 'GET':
      try {
        const existingUser = await req.prisma.user.findUnique({
          where: {
            id: user.id,
          },
          include: {
            vessel: true,
            company: true,
          },
        });
        res.status(200).json(existingUser);
      } catch (err) {
        return res.status(400).json({ error: 'Database Error!' });
      }
    case 'PUT':
      try {
        const updatedUser = await req.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            name,
            phone,
          },
        });
        return res.status(200).json(updatedUser);
      } catch (err) {
        return res.status(400).json({ error: 'Database Error!' });
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default middleware(handler);