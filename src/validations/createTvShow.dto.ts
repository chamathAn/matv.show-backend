import { Expose } from "class-transformer";

// Enum for FilterStatesType
export enum FilterStatesType {
  Complete = "complete",
  Dropped = "dropped",
  OnHold = "onhold",
  PlanToWatch = "planToWatch",
  Watching = "watching",
}

export class CreateTvShowDto {
  @Expose()
  tvShowId!: string;

  @Expose()
  userId!: string;

  @Expose()
  tvShowRating?: number;

  @Expose()
  tvShowStates!: string | "";

  @Expose()
  episodeStates?: {
    [key: string]: FilterStatesType | "";
  };

  @Expose()
  createdAt!: Date;

  @Expose()
  updatedAt!: Date;
}
