import { Injectable } from '@nestjs/common';

type FindSoups = { soups: string[] };

@Injectable()
export class SoupsService {
  findAll(): FindSoups {
    return {
      soups: [
        'Sopa Wantan',
        'Chilcano de Pescado',
        'Menestrón de Carne',
        'Caldo de Gallina',
      ],
    };
  }
}
