import { Injectable } from '@nestjs/common';

@Injectable()
export class DessertsService {
  findAll(): { desserts: string[] } {
    return {
      desserts: [
        'Chocotejas',
        'Budín de Pan',
        'Alfajores',
        'Turro de Doña Pepa',
        'Picarones',
        'Arroz Zambito',
        'Mazamorra Morada',
        'Arroz con Leche',
        'Suspiro a la Limeña',
      ],
    };
  }
}
