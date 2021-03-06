const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const MULTI_CHOICE = 'MULTI_CHOICE';
const CHECK_BOX = 'CHECK_BOX';
const CHECK_BOX_BODY_PART = 'CHECK_BOX_BODY_PART';
const TEXT_BOX = 'TEXT_BOX';
const SWITCH = 'SWITCH';
const INCIDENT = 'INCIDENT';
const DATE_TIME = 'DATE_TIME';
const DROP_DOWN = 'DROP_DOWN';

async function seed() {
  await prisma.socQuestion.deleteMany({
    where: {
      category: INCIDENT,
    },
  });
  await prisma.socQuestion.createMany({
    data: [
      {
        maxSelection: 0,
        options: [],
        question: 'Incident Date Time',
        type: DATE_TIME,
        page: 1,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['At Sea', 'At Port'],
        question: 'Vessel Location',
        type: MULTI_CHOICE,
        page: 1,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['Applicable', 'Not Applicable'],
        question: 'Weather Condition',
        type: MULTI_CHOICE,
        page: 1,
        order: 3,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['North', 'South', 'East', 'West'],
        question: 'Wind Direction',
        type: DROP_DOWN,
        page: 1,
        order: 4,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Wind Speed',
        type: TEXT_BOX,
        page: 1,
        order: 5,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['1', '2', '3', '4'],
        question: 'Beaufort Scale',
        type: DROP_DOWN,
        page: 1,
        order: 6,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['Clear', 'Poor'],
        question: 'Visibility',
        type: DROP_DOWN,
        page: 1,
        order: 7,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'People',
          'Equipment',
          'Weather',
          'Communication',
          'Organization',
          'Unspecified',
        ],
        question: 'Cause of Incident',
        type: MULTI_CHOICE,
        page: 1,
        order: 8,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Slips & Trips',
          'Struck By & Falling Objects',
          'Fire/ Fire Hazard',
          'Equipment',
          'Lifting',
          'PPE',
          'Spill/leak/release',
          'Navigation / Mooring / Line ',
          'House Keeping',
          'Electrical',
          'Safety Equipment',
          'Others',
        ],
        question: 'Incident Related to',
        type: MULTI_CHOICE,
        page: 2,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Maintenance',
          'Cargo operations',
          'Mooring',
          'Personnel Transfer',
          'Manual handling',
          'Housekeeping',
          'Electrical work',
          'Crane Operations',
          'Welding',
          'Drills',
          'Maneuvering',
          'Other (Specify)',
        ],
        question: 'Current Activity at the time of Incident',
        type: MULTI_CHOICE,
        page: 2,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
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
        question: 'Location of the Incident',
        type: MULTI_CHOICE,
        page: 3,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: 'UNSAFE_ACT',
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Mooring / Berthing',
          'Anchor Handling',
          'Towing',
          'Supply Operations',
          'DP Operations',
          'Subsea operations',
          'Transit',
          'Operations in port',
          'Lifting operations',
          'Offshore construction',
          'Others',
        ],
        question: 'Vessels activity at the time of Incident',
        type: MULTI_CHOICE,
        page: 3,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Catastrophic',
          'Serious',
          'Moderate',
          'Slight',
          'Negligible',
        ],
        question: 'Possible severity of Incident',
        type: MULTI_CHOICE,
        page: 3,
        order: 3,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 3,
        options: [
          'Fatality or injury',
          'Property loss or Damage',
          'Environmental Damage',
        ],
        question: 'Category of incident',
        type: CHECK_BOX,
        page: 4,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: [
          'Burn',
          'Internal injury',
          'Electrical shock',
          'Cut',
          'Crushed',
          'Foreign body',
          'Bruising / abrasion',
          'Stretched / twisted',
          'Fracture',
        ],
        question: 'Type ( Injury / Fatality )',
        type: MULTI_CHOICE,
        page: 4,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 7,
        options: [
          'Eyes',
          'Head',
          'Torso',
          'Arms',
          'Hand / Fingers',
          'Back',
          'Legs',
          'Feet / Toes',
        ],
        question: 'Part of the Body Injured',
        type: CHECK_BOX_BODY_PART,
        page: 4,
        order: 3,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 1,
        options: ['Yes', 'No'],
        question: 'Was the IP sent ashore for treatment',
        type: MULTI_CHOICE,
        page: 4,
        order: 4,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Brief description of Incident',
        type: TEXT_BOX,
        page: 5,
        order: 1,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
      {
        maxSelection: 0,
        options: [],
        question: 'Immediate corrective action is taken',
        type: TEXT_BOX,
        page: 5,
        order: 2,
        createdById: 'ckmp1f5cs0019pvoz05unrisi',
        updatedById: 'ckmp1f5cs0019pvoz05unrisi',
        category: INCIDENT,
        companyId: 'ckmp1f5cs0018pvozzatjmdgx',
      },
    ],
  });
}

seed().then(() => {
  prisma.$disconnect();
  console.log('Done!');
});
