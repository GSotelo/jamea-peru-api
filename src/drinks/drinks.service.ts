import { Injectable } from '@nestjs/common';

@Injectable()
export class DrinksService {
  findAll(): { drinks: string[] } {
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
