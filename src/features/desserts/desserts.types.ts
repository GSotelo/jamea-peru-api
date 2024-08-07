import type { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type DessertId =
  | 'chocotejas'
  | 'budin-de-pan'
  | 'alfajores'
  | 'turron-de-dona-pepa'
  | 'picarones'
  | 'arroz-zambito'
  | 'mazamorra-morada'
  | 'arroz-con-leche'
  | 'suspiro-a-la-limena';

export type DessertName =
  | 'Chocotejas'
  | 'Budín de Pan'
  | 'Alfajores'
  | 'Turrón de Doña Pepa'
  | 'Picarones'
  | 'Arroz Zambito'
  | 'Mazamorra Morada'
  | 'Arroz con Leche'
  | 'Suspiro a la Limeña';

export type DessertItem = MenuItem<DessertId, DessertName>;

export type MenuType = { type: 'desserts' };

export type DessertsMenu = Menu<MenuType, DessertItem>;

export type DessertRecipe = Recipe<DessertItem>;
