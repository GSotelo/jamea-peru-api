import { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type SideDishId =
  | 'chifles-piuranos'
  | 'salsa-criolla'
  | 'cancha-serrana';

export type SideDishName =
  | 'Chifles Piuranos'
  | 'Salsa Criolla'
  | 'Cancha Serrana';

export type SideDishItem = MenuItem<SideDishId, SideDishName>;

export type MenuType = { type: 'sideDishes' };

export type SideDishMenu = Menu<MenuType, SideDishItem>;

export type SideDishRecipe = Recipe<SideDishItem>;
