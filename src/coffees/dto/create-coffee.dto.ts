import { OmitType } from '@nestjs/mapped-types';
import { BaseCoffeeDto } from './base-coffee.dto';

export class CreateCoffeeDto extends OmitType(BaseCoffeeDto, ['id']) {}
