/*
  Warnings:

  - You are about to drop the column `socQuestionMasterId` on the `SocAnswer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SocAnswer" DROP CONSTRAINT "SocAnswer_socQuestionMasterId_fkey";

-- AlterTable
ALTER TABLE "SocAnswer" DROP COLUMN "socQuestionMasterId";
