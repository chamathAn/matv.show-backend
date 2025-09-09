-- CreateTable
CREATE TABLE "public"."Animes" (
    "id" SERIAL NOT NULL,
    "animeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "animeStates" TEXT NOT NULL,
    "episodeStates" JSONB,
    "animeRating" INTEGER,

    CONSTRAINT "Animes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Animes" ADD CONSTRAINT "Animes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
