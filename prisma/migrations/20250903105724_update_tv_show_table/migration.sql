/*
  Warnings:

  - Made the column `tvShowStates` on table `TvShow` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."TvShow" ALTER COLUMN "tvShowStates" SET NOT NULL,
ALTER COLUMN "tvShowStates" SET DATA TYPE TEXT;
