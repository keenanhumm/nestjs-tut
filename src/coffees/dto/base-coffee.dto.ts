import { IsInt, IsString } from 'class-validator';

export class BaseCoffeeDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
