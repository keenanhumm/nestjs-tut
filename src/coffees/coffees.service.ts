import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: uuid(),
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === id);

    if (!coffee) {
      throw new NotFoundException(`coffee with id ${id} could not be found.`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);

    return createCoffeeDto;
  }

  patch(id: string, updatedValues: any) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      Object.assign(existingCoffee, updatedValues);
    }

    return existingCoffee;
  }

  delete(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);

    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
