import {
  IsArray,
  IsDefined,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CharacteristicDto } from './characteristic-dto';
import { Type } from 'class-transformer';
import { VariantDto } from './variant.dto';

export class CreateProductDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  name: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  brand: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  category: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  description: string;

  @IsDefined()
  @IsNumber()
  @Min(0)
  price: number;

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CharacteristicDto)
  characteristics: CharacteristicDto[];

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VariantDto)
  variants: VariantDto[];
}
