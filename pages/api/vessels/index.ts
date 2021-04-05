import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

async function handler(req: _NextApiRequest, res: _NextApiResponse) {
  const {
    method,
    body: { vesselId },
    user,
  } = req;

  if (!user) {
    return res.status(401).json({ message: 'Please login!' });
  }

  switch (method) {
    case 'GET':
      try {
        const vessels = await req.prisma.vessel.findMany({
          where: {
            companyId: user.companyId,
          },
        });
        res.status(200).json(vessels);
      } catch (error) {
        res.status(400).json({ error: 'Database Error!' });
      }

      break;
    case 'PUT':
      try {
        const updatedUser = await req.prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            updatedById: user.id,
            vesselId: vesselId,
          },
          include: {
            vessel: true,
            company: true,
          },
        });
        delete updatedUser.password;
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(400).json({ error: 'Database Error!' });
      }

      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default middleware(handler);