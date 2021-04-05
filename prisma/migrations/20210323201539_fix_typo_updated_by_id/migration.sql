/*
  Warnings:

  - You are about to drop the column `udpatedById` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `ContactUs` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `RedeemableProducts` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `Reward` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `Soc` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `SocAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `SocQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `SocQuestionMaster` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedById` on the `Vessel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "ContactUs" DROP CONSTRAINT "ContactUs_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "RedeemableProducts" DROP CONSTRAINT "RedeemableProducts_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "Reward" DROP CONSTRAINT "Reward_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "Soc" DROP CONSTRAINT "Soc_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "SocAnswer" DROP CONSTRAINT "SocAnswer_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "SocQuestion" DROP CONSTRAINT "SocQuestion_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "SocQuestionMaster" DROP CONSTRAINT "SocQuestionMaster_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_udpatedById_fkey";

-- DropForeignKey
ALTER TABLE "Vessel" DROP CONSTRAINT "Vessel_udpatedById_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "ContactUs" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "RedeemableProducts" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "Reward" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "Soc" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "SocAnswer" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "SocQuestion" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "SocQuestionMaster" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "Vessel" DROP COLUMN "udpatedById",
ADD COLUMN     "updatedById" TEXT;

-- AddForeignKey
ALTER TABLE "Company" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactUs" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedeemableProducts" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reward" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soc" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocAnswer" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocQuestion" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocQuestionMaster" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
