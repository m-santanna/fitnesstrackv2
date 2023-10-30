/*
  Warnings:

  - You are about to drop the column `current_weight` on the `ExerciseSet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExerciseSet" DROP COLUMN "current_weight",
ADD COLUMN     "currentWeight" DECIMAL(5,2)[];
