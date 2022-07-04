import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  autoLoadEntities: true, // models will be loaded automatically
  synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
};

const typeOrmModule = TypeOrmModule.forRoot(typeOrmModuleOptions);

@Module({
  imports: [CoffeesModule, typeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
