/*
  Warnings:

  - A unique constraint covering the columns `[event_vendor_id]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Service_event_vendor_id_key" ON "Service"("event_vendor_id");
