/*
  Warnings:

  - Added the required column `page` to the `SocQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `SocQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `page` to the `SocQuestionMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `SocQuestionMaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SocQuestion" ADD COLUMN     "page" INTEGER NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SocQuestionMaster" ADD COLUMN     "page" INTEGER NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL;
