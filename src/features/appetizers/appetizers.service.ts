import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  AppetizerId,
  AppetizerMenu,
  AppetizerRecipe,
} from '@appetizers/appetizers.types';

export type FindMenu = () => AppetizerMenu;
export type FindRecipe = (id: AppetizerId) => Promise<AppetizerRecipe>;

@Injectable()
export class AppetizersService {
  findMenu: FindMenu = () => {
    return menu;
  };

  findRecipe: FindRecipe = async (id: AppetizerId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
