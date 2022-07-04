import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PatchCoffeeDto } from './dto/patch-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getCoffees() {
    return this.coffeesService.findAll();
  }
  @Get(':id')
  getCoffee(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  patchCoffee(@Param('id') id: number, @Body() patchCoffeeDto: PatchCoffeeDto) {
    return this.coffeesService.patch(id, patchCoffeeDto);
  }
  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
