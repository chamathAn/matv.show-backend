/*
  Warnings:

  - You are about to drop the column `wathedEpisodesStates` on the `TvShow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."TvShow" DROP COLUMN "wathedEpisodesStates",
ADD COLUMN     "episodeStates" JSONB;
