import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  AppetizerId,
  AppetizerMenu,
  AppetizerRecipe,
} from '@appetizers/appetizers.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class AppetizersService {
  findMenu: FindMenu<AppetizerMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<AppetizerId, AppetizerRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
