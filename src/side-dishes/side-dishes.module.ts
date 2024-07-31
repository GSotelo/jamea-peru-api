import { Module } from '@nestjs/common';
import { SideDishesController } from './side-dishes.controller';
import { SideDishesService } from './side-dishes.service';

@Module({
  controllers: [SideDishesController],
  providers: [SideDishesService],
})
export class SideDishesModule {}
