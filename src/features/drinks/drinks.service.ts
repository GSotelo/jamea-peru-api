import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { DrinkId, DrinkMenu, DrinkRecipe } from './drinks.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class DrinksService {
  findMenu: FindMenu<DrinkMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<DrinkId, DrinkRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
