import { Injectable } from '@nestjs/common';

type FindDesserts = { desserts: string[] };

@Injectable()
export class DessertsService {
  findAll(): FindDesserts {
    return {
      desserts: [
        'Chocotejas',
        'Budín de Pan',
        'Alfajores',
        'Turrón de Doña Pepa',
        'Picarones',
        'Arroz Zambito',
        'Mazamorra Morada',
        'Arroz con Leche',
        'Suspiro a la Limeña',
      ],
    };
  }
}
