import { Controller, Get } from '@nestjs/common';
import { SideDishesService } from './side-dishes.service';

@Controller('side-dishes')
export class SideDishesController {
  constructor(private readonly sideDishesService: SideDishesService) {}

  @Get()
  getSideDishes() {
    return this.sideDishesService.findAll();
  }
}
