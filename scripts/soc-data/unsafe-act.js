const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const MULTI_CHOICE = 'MULTI_CHOICE';
const CHECK_BOX = 'CHECK_BOX';
const TEXT_BOX = 'TEXT_BOX';
const SWITCH = 'SWITCH';

async function seed() {
  await prisma.socQuestion.deleteMany({
    where: {
      category: 'UNSAFE_ACT',
    },
  });
  await prisma.socQuestion.createMany({
    data: [
      {
        maxSelection: 1,
        options: [
          'Damage to health and hygiene',
          'Incorrect repair of equipment',
          'Bypass or removal of safety devices',
          'Operating equipment at unsafe speed / position',
          'Working with indequate / incorrect PPE',
          'Using incorrect procedure',
          'Using defective equipment',
          'Unsafe navigational act',
          'Others (Specify)',
        ],
        question: 'Type of Unsafe Act',
        type: MULTI_CHOICE,
        page: 1,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['Yes', 'No'],
        question: 'Was the Stop Work Authority Exercised',
        type: MULTI_CHOICE,
        page: 2,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Main Deck',
          'Accommodation',
          'Machinery space',
          'Galley',
          'Store-rooms',
          'Tank / Holds / cofferdams etc.',
          'Bridge',
          'ECR',
          'Compass deck / monkey island',
          'Others',
        ],
        question: 'Area of Work',
        type: MULTI_CHOICE,
        page: 2,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Mooring / berthing',
          'Anchor handling',
          'Towing',
          'Supply operations',
          'DP operations',
          'Subsea operations',
          'Transit',
          'Operations in port',
          'Lifting operations',
          'Offshore construction',
          'Others',
        ],
        question: 'Vessel Activity',
        type: MULTI_CHOICE,
        page: 3,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 3,
        options: [
          'PPE',
          'PTW',
          'Confined space',
          'Energy isolation',
          'System overide',
          'Working at height / overside',
          'Lifting',
          'Toxic gas',
          'Line of fire / Pinch points',
          'Hot work',
          'Health / Hygiene',
          'Tools / equipment',
          'Safe passage',
          'Others',
        ],
        question: 'Observation Related To (Max 3)',
        type: CHECK_BOX,
        page: 4,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Description of observation',
        type: TEXT_BOX,
        page: 5,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Corrective Action Taken',
        type: TEXT_BOX,
        page: 5,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['Corrected', 'Partly corrected', 'Not corrected'],
        question: 'Outcome',
        type: TEXT_BOX,
        page: 5,
        order: 3,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Submit as anonymous user?',
        type: SWITCH,
        page: 5,
        order: 4,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
    ],
  });
}

seed().then(() => {
  prisma.$disconnect();
  console.log('Done!');
});
