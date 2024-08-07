import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  SideDishId,
  SideDishMenu,
  SideDishRecipe,
} from './side-dishes.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class SideDishesService {
  findMenu: FindMenu<SideDishMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<SideDishId, SideDishRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
