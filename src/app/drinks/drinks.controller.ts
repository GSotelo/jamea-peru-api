import { Controller, Get } from '@nestjs/common';
import { DrinksService } from './drinks.service';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}
  @Get()
  getDrinks() {
    return this.drinksService.findAll();
  }
}
