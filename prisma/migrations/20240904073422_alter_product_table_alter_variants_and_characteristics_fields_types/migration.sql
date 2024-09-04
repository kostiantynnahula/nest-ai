/*
  Warnings:

  - You are about to drop the `Characteristic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Variant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Characteristic" DROP CONSTRAINT "Characteristic_productId_fkey";

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "characteristics" JSONB[],
ADD COLUMN     "variants" JSONB[];

-- DropTable
DROP TABLE "Characteristic";

-- DropTable
DROP TABLE "Variant";
