-- CreateTable
CREATE TABLE "public"."TvShow" (
    "id" SERIAL NOT NULL,
    "tvShowId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wathedEpisodes" INTEGER[],
    "tvShowRating" INTEGER,

    CONSTRAINT "TvShow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TvShow" ADD CONSTRAINT "TvShow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
