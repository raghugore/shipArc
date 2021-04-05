/*
  Warnings:

  - You are about to drop the column `start_date` on the `RedeemableProducts` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `RedeemableProducts` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `RedeemableProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `RedeemableProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RedeemableProducts" DROP COLUMN "start_date",
DROP COLUMN "end_date",
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL;
