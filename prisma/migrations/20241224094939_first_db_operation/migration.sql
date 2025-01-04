-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Service_Cart" (
    "card_id" SERIAL NOT NULL,
    "current_total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Service_Cart_pkey" PRIMARY KEY ("card_id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "bill_number" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "bill_amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("bill_number")
);

-- CreateTable
CREATE TABLE "Event_Vendor" (
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

    CONSTRAINT "Event_Vendor_pkey" PRIMARY KEY ("event_vendor_id")
);

-- CreateTable
CREATE TABLE "Service" (
    "service_id" SERIAL NOT NULL,
    "event_vendor_id" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "service_description" TEXT NOT NULL,
    "charges" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "service_id" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Bill_service_id_key" ON "Bill"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_Vendor_business_number_key" ON "Event_Vendor"("business_number");

-- CreateIndex
CREATE UNIQUE INDEX "Event_Vendor_GST_number_key" ON "Event_Vendor"("GST_number");

-- AddForeignKey
ALTER TABLE "Service_Cart" ADD CONSTRAINT "Service_Cart_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Bill"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_event_vendor_id_fkey" FOREIGN KEY ("event_vendor_id") REFERENCES "Event_Vendor"("event_vendor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("service_id") ON DELETE RESTRICT ON UPDATE CASCADE;
