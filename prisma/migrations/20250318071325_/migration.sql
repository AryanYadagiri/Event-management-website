/*
  Warnings:

  - The primary key for the `EventVendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `event_vendor_id` on the `EventVendor` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_event_vendor_id_fkey";

-- DropForeignKey
ALTER TABLE "Service_Cart" DROP CONSTRAINT "Service_Cart_card_id_fkey";

-- AlterTable
ALTER TABLE "EventVendor" DROP CONSTRAINT "EventVendor_pkey",
DROP COLUMN "event_vendor_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "EventVendor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Service_Cart" ADD CONSTRAINT "Service_Cart_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_event_vendor_id_fkey" FOREIGN KEY ("event_vendor_id") REFERENCES "EventVendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
