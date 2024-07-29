import { Injectable } from '@nestjs/common';

@Injectable()
export class AppetizersService {
  findAll(): { appetizers: string[] } {
    return { appetizers: ['Ensalada de Palta', 'Empanadas Peruanas'] };
  }
}
