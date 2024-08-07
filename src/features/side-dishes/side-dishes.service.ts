import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  SideDishId,
  SideDishMenu,
  SideDishRecipe,
} from './side-dishes.types';

export type FindMenu = SideDishMenu;
export type FindRecipe = (id: SideDishId) => Promise<SideDishRecipe>;

@Injectable()
export class SideDishesService {
  findMenu(): FindMenu {
    return menu;
  }

  findRecipe: FindRecipe = async (id: SideDishId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
