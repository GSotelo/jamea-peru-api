import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { DrinkId, DrinkMenu, DrinkRecipe } from './drinks.types';

type FindMenu = () => DrinkMenu;
type FindRecipe = (id: DrinkId) => Promise<DrinkRecipe>;

@Injectable()
export class DrinksService {
  findMenu: FindMenu = () => {
    return menu;
  };

  findRecipe: FindRecipe = async (id: DrinkId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
