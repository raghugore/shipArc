import { asNexusMethod, interfaceType, makeSchema } from 'nexus';
import { GraphQLDateTime } from 'graphql-iso-date';
import path from 'path';
import * as User from './user';
import { Query } from './query';

export const GQLDate = asNexusMethod(GraphQLDateTime, 'datetime');

const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.id('id', { description: 'Unique identifier for the resource' });
    t.field('createdAt', { type: 'DateTime' });
    t.field('createdBy', { type: 'User' });
    t.field('updatedAt', { type: 'DateTime' });
    t.field('updatedBy', { type: 'User' });
  },
  resolveType: (_, args, ctx) => {
    console.log(args, _, ctx);
    return null;
  },
});

export const schema = makeSchema({
  types: [GQLDate, Node, User, Query],
  outputs: {
    typegen: path.join(process.cwd(), '__generated__', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), '__generated__', 'schema.graphql'),
  },
  contextType: {
    module: path.join(process.cwd(), 'schema', 'context.ts'),
    export: 'Context',
  },
});
