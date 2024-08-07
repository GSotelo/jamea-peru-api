import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type { DessertId, DessertsMenu, DessertRecipe } from './desserts.types';

type FindMenu = () => DessertsMenu;
type FindRecipe = (id: DessertId) => Promise<DessertRecipe>;

@Injectable()
export class DessertsService {
  findMenu: FindMenu = () => {
    return menu;
  };

  findRecipe: FindRecipe = async (id: DessertId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
