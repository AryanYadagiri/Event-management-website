/*
  Warnings:

  - A unique constraint covering the columns `[business_email]` on the table `EventVendor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EventVendor_business_email_key" ON "EventVendor"("business_email");
