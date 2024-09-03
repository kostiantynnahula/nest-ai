import { IsString, MaxLength, MinLength } from 'class-validator';

export class VariantDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  color: string;
}
