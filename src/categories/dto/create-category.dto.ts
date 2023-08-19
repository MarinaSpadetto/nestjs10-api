import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  description?: string | null;
}
