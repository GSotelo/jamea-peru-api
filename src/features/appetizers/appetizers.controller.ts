import { Controller, Get, Param } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { AppetizersService } from './appetizers.service';
import type { AppetizerId } from './appetizers.types';

@Controller({
  path: 'appetizers',
  version: '1',
})
export class AppetizersController {
  private readonly logger = new Logger(AppetizersController.name);

  constructor(private readonly appetizersService: AppetizersService) {}

  @Get()
  findMenu() {
    this.logger.log('Finding appetizers menu 🤩');
    return this.appetizersService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: AppetizerId) {
    return this.appetizersService.findRecipe(id);
  }
}
