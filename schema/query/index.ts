import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.list.string('items', {
      resolve(_, args, ctx) {
        return [];
      },
    });
  },
});
