/*
  Warnings:

  - Added the required column `pincode` to the `Event_Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event_Vendor" ADD COLUMN     "pincode" INTEGER NOT NULL;
