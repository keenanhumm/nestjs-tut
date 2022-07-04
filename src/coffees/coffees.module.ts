import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

const entities = [Coffee];
const entityModule = TypeOrmModule.forFeature(entities);

@Module({
  imports: [entityModule],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
