/*
  Warnings:

  - You are about to drop the column `wathedEpisodes` on the `TvShow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."TvShow" DROP COLUMN "wathedEpisodes",
ADD COLUMN     "wathedEpisodesStates" JSONB;
