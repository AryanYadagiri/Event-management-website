/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_service_id_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "categories" TEXT[];

-- DropTable
DROP TABLE "Category";
