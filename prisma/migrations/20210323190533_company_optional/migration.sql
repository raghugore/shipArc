-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "adminId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "companyId" DROP NOT NULL;
