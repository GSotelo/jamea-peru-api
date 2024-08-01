import { Controller, Get } from '@nestjs/common';
import { AppetizersService } from './appetizers.service';

type Appetizers = {
  appetizers: string[];
};

@Controller('appetizers')
export class AppetizersController {
  constructor(private readonly appetizersService: AppetizersService) {}

  @Get()
  getAppetizers(): Appetizers {
    return this.appetizersService.findAll();
  }
}
