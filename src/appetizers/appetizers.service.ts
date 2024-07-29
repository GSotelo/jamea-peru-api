import { Injectable } from '@nestjs/common';

@Injectable()
export class AppetizersService {
  findAll(): { appetizers: string[] } {
    return {
      appetizers: [
        'Ensalada de Palta',
        'Empanadas Peruanas',
        'Palta Rellena',
        'Papa Rellena de Pollo',
        'Ceviche',
        'Empanadas',
        'Wantan Frito',
        'Crema de Rocoto',
        'Ensalada Rusa',
        'Ocopa Arequipeña',
        'Papa Rellena',
        'Papa a la Huancaína',
      ],
    };
  }
}
