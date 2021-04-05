import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

async function handler(req: _NextApiRequest, res: _NextApiResponse) {
  const { method, user } = req;

  if (!user) {
    return res.status(401).json({ message: 'Please login!' });
  }

  switch (method) {
    case 'GET':
      const questions = await req.prisma.socQuestion.findMany({
        where: {
          companyId: user.companyId,
        },
      });
      return res.status(200).json(questions);
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default middleware(handler);
