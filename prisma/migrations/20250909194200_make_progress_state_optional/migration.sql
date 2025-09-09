-- AlterTable
ALTER TABLE "public"."Animes" ALTER COLUMN "animeStates" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Movies" ALTER COLUMN "movieStates" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."TvShow" ALTER COLUMN "tvShowStates" DROP NOT NULL;
