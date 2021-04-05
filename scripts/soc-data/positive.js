const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const MULTI_CHOICE = 'MULTI_CHOICE';
const CHECK_BOX = 'CHECK_BOX';
const TEXT_BOX = 'TEXT_BOX';
const SWITCH = 'SWITCH';

async function seed() {
  await prisma.socQuestion.deleteMany({
    where: {
      category: 'POSITIVE_FINDING',
    },
  });
  await prisma.socQuestion.createMany({
    data: [
      {
        maxSelection: 0,
        options: [],
        question: 'Positive findings',
        type: TEXT_BOX,
        page: 1,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'POSITIVE_FINDING',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
    ],
  });
}

seed().then(() => {
  prisma.$disconnect();
  console.log('Done!');
});
