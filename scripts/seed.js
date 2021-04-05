const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const MULTI_CHOICE = 'MULTI_CHOICE';
const CHECK_BOX = 'CHECK_BOX';
const TEXT_BOX = 'TEXT_BOX';
const SWITCH = 'SWITCH';

async function seed() {
  await prisma.user.deleteMany({});
  await prisma.company.deleteMany({});
  await prisma.socQuestionMaster.deleteMany({});
  const company = await prisma.company.create({
    data: {
      accessEnabled: true,
      name: 'Casper',
      userLimit: 100,
      admin: {
        create: {
          designation: 'Company Admin',
          email: 'admin@casper.com',
          isSuperAdmin: false,
          name: 'Admin',
          password: 'admin@123',
          phone: '',
        },
      },
    },
  });
  const admin = await prisma.user.update({
    where: { email: 'admin@casper.com' },
    data: {
      companyId: company.id,
    },
  });
  await prisma.user.create({
    data: {
      designation: 'Sailor',
      email: 'sailor@casper.com',
      isSuperAdmin: false,
      name: 'Jony Way',
      password: 'sailor@123',
      phone: '+91',
      companyId: company.id,
      createdById: admin.id,
      updatedById: admin.id,
    },
  });
}

seed().then(() => {
  prisma.$disconnect();
  console.log('Done!');
});
