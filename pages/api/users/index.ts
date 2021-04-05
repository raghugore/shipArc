import { getPrismaInstance } from 'utils/prisma-instance';

const prisma = getPrismaInstance();

async function handler(req, res) {
  const {
    headers,
    method,
    body: { designation, email, isSuperAdmin, name, password, phone },
    query,
  } = req;

  switch (method) {
    case 'GET':
      const users = await prisma.user.findMany({});
      res.status(200).json(users);
      break;
    case 'POST':
      const newUser = await prisma.user.create({
        data: {
          designation,
          email,
          isSuperAdmin,
          name,
          password,
          phone,
        },
      });
      res.status(200).json(newUser);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
