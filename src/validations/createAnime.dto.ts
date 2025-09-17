import { Expose } from "class-transformer";

// Enum for FilterStatesType
export enum FilterStatesType {
  Complete = "complete",
  Dropped = "dropped",
  OnHold = "onhold",
  PlanToWatch = "planToWatch",
  Watching = "watching",
}

export class CreateAnimeDto {
  @Expose()
  animeId!: string;

  @Expose()
  userId!: string;

  @Expose()
  animeRating?: number;

  @Expose()
  animeStates!: string | "";

  @Expose()
  episodeStates?: {
    [key: string]: FilterStatesType | "";
  };

  @Expose()
  createdAt!: Date;

  @Expose()
  updatedAt!: Date;
}
