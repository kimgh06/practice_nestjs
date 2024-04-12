import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}