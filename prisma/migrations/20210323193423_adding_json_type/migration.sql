/*
  Warnings:

  - The `options` column on the `SocQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `options` column on the `SocQuestionMaster` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SocQuestion" DROP COLUMN "options",
ADD COLUMN     "options" JSONB,
ALTER COLUMN "maxSelection" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SocQuestionMaster" DROP COLUMN "options",
ADD COLUMN     "options" JSONB,
ALTER COLUMN "maxSelection" DROP NOT NULL;
