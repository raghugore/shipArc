/*
  Warnings:

  - Added the required column `companyId` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "updatedById" TEXT,
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Training" ADD FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
