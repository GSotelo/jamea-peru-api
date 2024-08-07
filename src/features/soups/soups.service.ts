import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { SoupId, SoupMenu, SoupRecipe } from '@soups/soups.types';

export type FindSoup = (id: SoupId) => Promise<SoupRecipe>;
export type FindMenu = () => SoupMenu;

@Injectable()
export class SoupsService {
  findAll: FindMenu = () => {
    return menu;
  };

  findById: FindSoup = async (id: SoupId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
