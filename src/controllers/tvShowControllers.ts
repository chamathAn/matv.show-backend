import type { NextFunction } from "express";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { plainToClass } from "class-transformer";
import { CreateTvShowDto } from "../validations/createTvShow.dto";

const prisma = new PrismaClient();
export const createTvShow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tvShowDto = plainToClass(CreateTvShowDto, req.body);
    const userId = tvShowDto.userId;
    const tvShowId = tvShowDto.tvShowId;

    // check if tv show already exists
    const findTvShow = await prisma.tvShow.findFirst({
      where: {
        tvShowId,
        userId,
      },
    });

    if (findTvShow) {
      // update the tv show if it already exists
      await prisma.tvShow.update({
        where: {
          id: findTvShow.id,
        },
        data: {
          ...tvShowDto,
        },
      });

      // return the updated tv show
      return res.json({ res: "updated the tv show", obj: findTvShow });
    }

    // create a new tv show
    const createdTvShowResponse = await prisma.tvShow.create({
      data: {
        ...tvShowDto,
      },
    });

    // return the created tv show
    res.json({ res: "created the tv show", obj: createdTvShowResponse });
  } catch (error) {
    next(error);
  }
};
