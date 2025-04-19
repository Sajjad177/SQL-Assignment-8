/*
  Warnings:

  - The values [HONDA,YAMAHA,KAWASAKI,SUZUKI,KTM] on the enum `BikeBrand` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BikeBrand_new" AS ENUM ('Yamaha', 'Honda', 'Kawasaki', 'Suzuki', 'Ktm');
ALTER TABLE "bikes" ALTER COLUMN "brand" TYPE "BikeBrand_new" USING ("brand"::text::"BikeBrand_new");
ALTER TYPE "BikeBrand" RENAME TO "BikeBrand_old";
ALTER TYPE "BikeBrand_new" RENAME TO "BikeBrand";
DROP TYPE "BikeBrand_old";
COMMIT;
