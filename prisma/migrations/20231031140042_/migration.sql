/*
  Warnings:

  - A unique constraint covering the columns `[userId,groupName]` on the table `ExerciseGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ExerciseGroup_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseGroup_userId_groupName_key" ON "ExerciseGroup"("userId", "groupName");
