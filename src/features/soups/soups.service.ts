import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { SoupId, SoupMenu, SoupRecipe } from './soups.types';

export type FindMenu = () => SoupMenu;
export type FindRecipe = (id: SoupId) => Promise<SoupRecipe>;

@Injectable()
export class SoupsService {
  findMenu: FindMenu = () => {
    return menu;
  };

  findRecipe: FindRecipe = async (id: SoupId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
