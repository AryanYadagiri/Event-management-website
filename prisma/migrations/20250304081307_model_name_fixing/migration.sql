/*
  Warnings:

  - You are about to drop the `Event_Vendor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_event_vendor_id_fkey";

-- DropTable
DROP TABLE "Event_Vendor";

-- CreateTable
CREATE TABLE "EventVendor" (
    "event_vendor_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "business_number" INTEGER NOT NULL,
    "business_email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "GST_number" TEXT NOT NULL,
    "business_address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,

    CONSTRAINT "EventVendor_pkey" PRIMARY KEY ("event_vendor_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventVendor_business_number_key" ON "EventVendor"("business_number");

-- CreateIndex
CREATE UNIQUE INDEX "EventVendor_GST_number_key" ON "EventVendor"("GST_number");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_event_vendor_id_fkey" FOREIGN KEY ("event_vendor_id") REFERENCES "EventVendor"("event_vendor_id") ON DELETE RESTRICT ON UPDATE CASCADE;
