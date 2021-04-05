/*
  Warnings:

  - You are about to drop the column `enquiry_type` on the `ContactUs` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `RedeemableProducts` table. All the data in the column will be lost.
  - Added the required column `enquiryType` to the `ContactUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactUs" DROP COLUMN "enquiry_type",
ADD COLUMN     "enquiryType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RedeemableProducts" DROP COLUMN "company_id";
