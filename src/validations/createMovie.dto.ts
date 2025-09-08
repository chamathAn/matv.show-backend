import { Expose } from "class-transformer";

// Enum for FilterStatesType
export enum FilterStatesType {
  Complete = "complete",
  Dropped = "dropped",
  OnHold = "onhold",
  PlanToWatch = "planToWatch",
  Watching = "watching",
}

export class CreateMovieDto {
  @Expose()
  movieId!: string;

  @Expose()
  userId!: string;

  @Expose()
  movieRating?: number;

  @Expose()
  movieStates!: string | "";

  @Expose()
  createdAt!: Date;

  @Expose()
  updatedAt!: Date;
}
