import {
  middleware,
  _NextApiRequest,
  _NextApiResponse,
} from 'utils/middleware';

async function handler(req: _NextApiRequest, res: _NextApiResponse) {
  const { method, user, body } = req;

  if (!user) {
    return res.status(401).json({ message: 'Please login!' });
  }

  switch (method) {
    case 'GET':
      const socs = await req.prisma.soc.findMany({
        where: {
          userId: user.id,
        },
        include: {
          socAnswers: true,
        },
      });
      return res.status(200).json(socs);
    case 'POST':
      try {
        const soc = await req.prisma.soc.create({
          data: {
            companyId: user.companyId,
            userId: user.id,
            createdById: user.id,
            updatedById: user.id,
            socAnswers: {
              create: body.map((item) => {
                return {
                  ...item,
                  createdById: user.id,
                  updatedById: user.id,
                };
              }),
            },
          },
        });
        const socUpdated = await req.prisma.soc.findUnique({
          where: { id: soc.id },
          include: {
            socAnswers: true,
          },
        });
        return res.status(200).json(socUpdated);
      } catch (err) {
        console.error(err);
        return res
          .status(400)
          .json({ message: 'There was an error creating Soc!' });
      }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default middleware(handler);
