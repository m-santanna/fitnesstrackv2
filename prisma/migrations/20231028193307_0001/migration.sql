-- CreateTable
CREATE TABLE "ExerciseGroup" (
    "id" TEXT NOT NULL,
    "groupName" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,
    "exercisesId" INTEGER[],
    "isPublic" BOOLEAN NOT NULL,

    CONSTRAINT "ExerciseGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseSet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseName" TEXT NOT NULL,
    "reps" INTEGER[],
    "current_weight" DECIMAL(5,2)[],
    "timestamp" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExerciseSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseGroup_userId_key" ON "ExerciseGroup"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseSet_userId_key" ON "ExerciseSet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ExerciseGroup" ADD CONSTRAINT "ExerciseGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ExerciseSet" ADD CONSTRAINT "ExerciseSet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
