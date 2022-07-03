import { PartialType } from '@nestjs/mapped-types';
import { BaseCoffeeDto } from './base-coffee.dto';

export class PatchCoffeeDto extends PartialType(BaseCoffeeDto) {}
