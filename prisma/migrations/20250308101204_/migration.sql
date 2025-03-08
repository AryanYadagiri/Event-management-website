-- AlterTable
ALTER TABLE "EventVendor" ADD COLUMN     "user_type" "UserType" NOT NULL DEFAULT 'vendor';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "user_type" "UserType" NOT NULL DEFAULT 'regular';
