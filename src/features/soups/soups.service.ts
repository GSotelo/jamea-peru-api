import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { SoupId, SoupMenu, SoupRecipe } from './soups.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class SoupsService {
  findMenu: FindMenu<SoupMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<SoupId, SoupRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
