import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: false })
  @IsOptional()
  readonly genres: string[];
}