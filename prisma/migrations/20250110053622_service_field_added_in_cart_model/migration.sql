-- CreateTable
CREATE TABLE "_CartServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CartServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CartServices_B_index" ON "_CartServices"("B");

-- AddForeignKey
ALTER TABLE "_CartServices" ADD CONSTRAINT "_CartServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("service_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartServices" ADD CONSTRAINT "_CartServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Service_Cart"("card_id") ON DELETE CASCADE ON UPDATE CASCADE;
