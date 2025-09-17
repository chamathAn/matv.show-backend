import type { NextFunction } from "express";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { plainToClass } from "class-transformer";
import { CreateMovieDto } from "../validations/createMovie.dto";

const prisma = new PrismaClient();
export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieDto = plainToClass(CreateMovieDto, req.body);
    const userId = movieDto.userId;
    const movieId = movieDto.movieId;

    // check if movie already exists
    const findMovie = await prisma.movies.findFirst({
      where: {
        movieId,
        userId,
      },
    });

    if (findMovie) {
      // update the movie if it already exists
      await prisma.movies.update({
        where: {
          id: findMovie.id,
        },
        data: {
          ...movieDto,
        },
      });

      // return the updated movie
      return res.json({ res: "updated the movie", obj: findMovie });
    }

    // create a new movie
    const createdMovieRes = await prisma.movies.create({
      data: {
        ...movieDto,
      },
    });

    // return the created movie
    res.json({ res: "created the movie", obj: createdMovieRes });
  } catch (error) {
    next(error);
  }
};

export const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await prisma.movies.findMany({
      where: {
        userId: req.user.id,
      },
    });

    res.json(movies);
  } catch (error) {
    next(error);
  }
};
