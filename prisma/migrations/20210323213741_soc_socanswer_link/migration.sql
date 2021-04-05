/*
  Warnings:

  - Added the required column `socId` to the `SocAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SocAnswer" ADD COLUMN     "socId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SocAnswer" ADD FOREIGN KEY ("socId") REFERENCES "Soc"("id") ON DELETE CASCADE ON UPDATE CASCADE;
