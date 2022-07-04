import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PatchCoffeeDto } from './dto/patch-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return await this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.find({ where: { id: +id } });

    if (!coffee) {
      throw new NotFoundException(`coffee with id ${id} could not be found.`);
    }

    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);

    return this.coffeeRepository.save(coffee);
  }

  async patch(id: number, updatedValues: PatchCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id,
      ...updatedValues,
    });

    if (!coffee) {
      throw new NotFoundException(`coffee with id ${id} could not be found.`);
    }

    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);

    return this.coffeeRepository.remove(coffee);
  }
}
