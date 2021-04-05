import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

async function handler(req: _NextApiRequest, res: _NextApiResponse) {
  const {
    method,
    body: { oldPassword, newPassword },
    user,
  } = req;

  if (!user) {
    return res.status(401).json({ message: 'Please login!' });
  }

  switch (method) {
    case 'POST':
      try {
        const existingUser = await req.prisma.user.findUnique({
          where: {
            id: user.id,
          },
        });
        if (existingUser && existingUser.password === oldPassword) {
          let updatedUser = await req.prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              password: newPassword,
            },
          });
          delete updatedUser.password;
          return res.status(200).json(updatedUser);
        }
        return res.status(401).json({
          message: `Change Password Operation Failed!! Old Password ${oldPassword} is Not Matching`,
        });
      } catch (err) {
        return res.status(400).json({ message: 'Database Error!' });
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default middleware(handler);
