import { IsDefined, IsString } from 'class-validator';

export class ChartGptDto {
  @IsString()
  @IsDefined()
  product: string;
}
