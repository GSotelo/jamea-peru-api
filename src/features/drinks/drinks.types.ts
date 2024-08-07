import type { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type DrinkId =
  | 'limonada-frozen'
  | 'maracuya-sour'
  | 'emoliente'
  | 'chicha-morada'
  | 'pisco-sour'
  | 'inca-kola';

export type DrinkName =
  | 'Limonada Frozen'
  | 'Maracuyá Sour'
  | 'Emoliente'
  | 'Chicha Morada'
  | 'Pisco Sour'
  | 'Inca Kola';

export type DrinkItem = MenuItem<DrinkId, DrinkName>;

export type MenuType = { type: 'drinks' };

export type DrinkMenu = Menu<MenuType, DrinkItem>;

export type DrinkRecipe = Recipe<DrinkItem>;
