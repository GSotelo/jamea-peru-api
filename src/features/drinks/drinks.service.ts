import { Injectable } from '@nestjs/common';

type FindDrinks = { drinks: string[] };

@Injectable()
export class DrinksService {
  findAll(): FindDrinks {
    return {
      drinks: [
        'Limonada Frozen',
        'Maracuyá Sour',
        'Emoliente',
        'Chicha Morada',
        'Pisco Sour',
        'Inca Kola',
      ],
    };
  }
}
