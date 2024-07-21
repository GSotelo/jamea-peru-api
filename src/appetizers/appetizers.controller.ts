import { Controller, Get } from '@nestjs/common';

type Appetizers = {
  appetizers: string[];
};

@Controller('appetizers')
export class AppetizersController {
  @Get()
  getAppetizers(): Appetizers {
    return { appetizers: ['Ensalada de Palta', 'Empanadas Peruanas'] };
  }
}
