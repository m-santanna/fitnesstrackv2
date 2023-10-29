/*
  Warnings:

  - You are about to drop the column `exercisesId` on the `ExerciseGroup` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExerciseGroup" DROP COLUMN "exercisesId",
ADD COLUMN     "exercisesName" TEXT[];
