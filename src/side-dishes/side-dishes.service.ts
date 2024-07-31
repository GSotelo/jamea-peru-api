import { Injectable } from '@nestjs/common';

type FindSideDishes = { sideDishes: string[] };

@Injectable()
export class SideDishesService {
  findAll(): FindSideDishes {
    return {
      sideDishes: ['Chifles Piuranos', 'Salsa Criolla', 'Cancha Serrana'],
    };
  }
}
