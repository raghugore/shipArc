/*
  Warnings:

  - Added the required column `companyId` to the `Soc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Soc" ADD COLUMN     "companyId" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Soc" ADD FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
