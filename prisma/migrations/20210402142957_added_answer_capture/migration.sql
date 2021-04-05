-- AlterTable
ALTER TABLE "SocAnswer" ADD COLUMN     "options" JSONB,
ADD COLUMN     "files" JSONB,
ALTER COLUMN "questionId" DROP NOT NULL;
