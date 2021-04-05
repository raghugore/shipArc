import { ApolloServer } from 'apollo-server-micro';
import { middleware, _NextApiRequest } from 'utils/middleware';
import { schema } from 'schema';

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }: { req: _NextApiRequest }) => {
    return { prisma: req.prisma };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default middleware(handler);
