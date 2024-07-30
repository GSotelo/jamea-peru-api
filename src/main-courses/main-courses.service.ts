import { Injectable } from '@nestjs/common';

type FindMainCourses = { mainCourses: string[] };

@Injectable()
export class MainCoursesService {
  findAll(): FindMainCourses {
    return {
      mainCourses: [
        'Arroz a la Cubana',
        'Pollo con Champiñones',
        'Milanesa de Pollo',
        'Chicharron de Pota',
        'Tallarines a lo Alfredo',
        'Arroz Chaufa de Carne',
        'Tallarin Saltado Chino',
        'Jalea Mixta',
        'Salchipapa',
        'Sopa Seca con Caraculpra',
        'Chifa Aeropuerto',
        'Kam Lu Wantan',
        'Tallarines a la Huancaína',
        'Chi Jau Kay',
        'Chicharron de Chancho',
        'Escabeche de Pescado',
        'Tallarines Rojos',
        'Arroz con Mariscos',
        'Tallarines Verdes con Bisteck',
        'Arroz con Pollo',
        'Aji de Gallina',
        'Arroz Chaufa de Pollo',
      ],
    };
  }
}
