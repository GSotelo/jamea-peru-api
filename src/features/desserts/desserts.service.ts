import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { DessertId, DessertsMenu, DessertRecipe } from './desserts.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class DessertsService {
  findMenu: FindMenu<DessertsMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<DessertId, DessertRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
