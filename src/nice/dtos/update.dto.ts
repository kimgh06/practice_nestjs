import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateDTO } from "./create.dto";

export class UpdateDTO extends PartialType(CreateDTO) { }