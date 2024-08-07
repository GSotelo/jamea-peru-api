import type { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type MainCourseId =
  | 'arroz-a-la-cubana'
  | 'pollo-con-champinones'
  | 'milanesa-de-pollo'
  | 'chicharron-de-pota'
  | 'tallarines-a-lo-alfredo'
  | 'arroz-chaufa-de-carne'
  | 'tallarin-saltado-chino'
  | 'jalea-mixta'
  | 'salchipapa'
  | 'sopa-seca-con-caraculpra'
  | 'chifa-aeropuerto'
  | 'kam-lu-wantan'
  | 'tallarines-a-la-huancaina'
  | 'chi-jau-kay'
  | 'chicharron-de-chancho'
  | 'escabeche-de-pescado'
  | 'tallarines-rojos'
  | 'arroz-con-mariscos'
  | 'tallarines-verdes-con-bisteck'
  | 'arroz-con-pollo'
  | 'aji-de-gallina'
  | 'arroz-chaufa-de-pollo';

export type MainCourseName =
  | 'Arroz a la Cubana'
  | 'Pollo con Champiñones'
  | 'Milanesa de Pollo'
  | 'Chicharrón de Pota'
  | 'Tallarines a lo Alfredo'
  | 'Arroz Chaufa de Carne'
  | 'Tallarín Saltado Chino'
  | 'Jalea Mixta'
  | 'Salchipapa'
  | 'Sopa Seca con Caraculpra'
  | 'Chifa Aeropuerto'
  | 'Kam Lu Wantan'
  | 'Tallarines a la Huancaína'
  | 'Chi Jau Kay'
  | 'Chicharrón de Chancho'
  | 'Escabeche de Pescado'
  | 'Tallarines Rojos'
  | 'Arroz con Mariscos'
  | 'Tallarines Verdes con Bisteck'
  | 'Arroz con Pollo'
  | 'Aji de Gallina'
  | 'Arroz Chaufa de Pollo';

export type MainCourseItem = MenuItem<MainCourseId, MainCourseName>;

export type MenuType = { type: 'mainCourses' };

export type MainCourseMenu = Menu<MenuType, MainCourseItem>;

export type MainCourseRecipe = Recipe<MainCourseItem>;
