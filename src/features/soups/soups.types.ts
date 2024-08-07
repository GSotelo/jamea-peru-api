import type { Menu, MenuItem, Recipe } from '@shared/types/shared.types';

export type SoupId =
  | 'sopa-wantan'
  | 'chilcano-de-pescado'
  | 'menestron-de-carne'
  | 'caldo-de-gallina';

export type SoupName =
  | 'Sopa Wantan'
  | 'Chilcano de Pescado'
  | 'Menestrón de Carne'
  | 'Caldo de Gallina';

export type SoupItem = MenuItem<SoupId, SoupName>;

export type MenuType = { type: 'soups' };

export type SoupMenu = Menu<MenuType, SoupItem>;

export type SoupRecipe = Recipe<SoupItem>;
