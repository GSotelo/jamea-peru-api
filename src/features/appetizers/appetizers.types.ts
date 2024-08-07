import type { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type AppetizerId =
  | 'ensalada-de-palta'
  | 'empanadas-peruanas'
  | 'palta-rellena'
  | 'papa-rellena-de-pollo'
  | 'ceviche'
  | 'empanadas'
  | 'wantan-frito'
  | 'crema-de-rocoto'
  | 'ensalada-rusa'
  | 'ocopa-arequipeña'
  | 'papa-rellena'
  | 'papa-a-la-huancaina';

export type AppetizerName =
  | 'Ensalada de Palta'
  | 'Empanadas Peruanas'
  | 'Palta Rellena'
  | 'Papa Rellena de Pollo'
  | 'Ceviche'
  | 'Empanadas'
  | 'Wantan Frito'
  | 'Crema de Rocoto'
  | 'Ensalada Rusa'
  | 'Ocopa Arequipeña'
  | 'Papa Rellena'
  | 'Papa a la Huancaína';

export type AppetizerItem = MenuItem<AppetizerId, AppetizerName>;

export type MenuType = { type: 'appetizers' };

export type AppetizerMenu = Menu<MenuType, AppetizerItem>;

export type AppetizerRecipe = Recipe<AppetizerItem>;
