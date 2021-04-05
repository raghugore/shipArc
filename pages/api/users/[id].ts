import { getPrismaInstance } from 'utils/prisma-instance';

const prisma = getPrismaInstance();

async function handler(req, res) {
  const { headers, method, body, query } = req;

  switch (method) {
    case 'PUT':
      try {
        const udpatedUser = await prisma.user.update({
          where: { id: query.id },
          data: body,
        });
        res.status(200).json(udpatedUser);
      } catch (err) {
        res.status(400).json({ error: 'Database Error!' });
      }
      break;
    case 'DELETE':
      const deletedUser = await prisma.user.delete({
        where: { id: query.id },
      });
      res.status(200).json(deletedUser);
      break;
    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
