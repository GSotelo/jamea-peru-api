import { Controller, Get, Param } from '@nestjs/common';
import { AppetizersService } from './appetizers.service';
import type { AppetizerId } from './appetizers.types';

@Controller('appetizers')
export class AppetizersController {
  constructor(private readonly appetizersService: AppetizersService) {}

  @Get()
  findMenu() {
    return this.appetizersService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: AppetizerId) {
    return this.appetizersService.findRecipe(id);
  }
}
