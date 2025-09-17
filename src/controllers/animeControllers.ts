import type { NextFunction } from "express";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { plainToClass } from "class-transformer";
import { CreateAnimeDto } from "../validations/createAnime.dto";

const prisma = new PrismaClient();
export const createAnime = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const animeDto = plainToClass(CreateAnimeDto, req.body);
    const userId = animeDto.userId;
    const animeId = animeDto.animeId;

    // check if anime already exists
    const findAnime = await prisma.animes.findFirst({
      where: {
        animeId,
        userId,
      },
    });

    if (findAnime) {
      // update the anime if it already exists
      await prisma.animes.update({
        where: {
          id: findAnime.id,
        },
        data: {
          ...animeDto,
        },
      });

      // return the updated anime
      return res.json({ res: "updated the anime", obj: findAnime });
    }

    // create a new anime
    const createdTvShowResponse = await prisma.animes.create({
      data: {
        ...animeDto,
      },
    });

    // return the created anime
    res.json({ res: "created the anime", obj: createdTvShowResponse });
  } catch (error) {
    next(error);
  }
};

export const getAllAnimes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tvShows = await prisma.animes.findMany({
      where: {
        userId: req.user.id,
      },
    });

    res.json(tvShows);
  } catch (error) {
    next(error);
  }
};
