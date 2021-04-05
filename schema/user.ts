import { booleanArg, extendType, objectType, stringArg } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.implements('Node');
    t.string('email');
    t.string('name');
    t.string('phone');
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      resolve(_, args, ctx) {
        return ctx.prisma.user.findMany({});
      },
    });
  },
});

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        designation: stringArg({}),
        email: stringArg({}),
        isSuperAdmin: booleanArg({}),
        name: stringArg({}),
        password: stringArg({}),
        phone: stringArg({}),
      },
      resolve(
        _,
        { designation, email, isSuperAdmin, name, password, phone },
        ctx
      ) {
        return ctx.prisma.user.create({
          data: {
            designation,
            email,
            isSuperAdmin,
            name,
            password,
            phone,
          },
        });
      },
    });
  },
});
