import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  Min,
  IsInt,
} from 'class-validator';

export class CreateVideoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @Min(1)
  @IsInt()
  @IsNotEmpty()
  category_id: number;
}
