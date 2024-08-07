import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  MainCourseId,
  MainCourseMenu,
  MainCourseRecipe,
} from './main-courses.types';
import type { FindMenu, FindRecipe } from '@shared/types/shared.types';

@Injectable()
export class MainCoursesService {
  findMenu: FindMenu<MainCourseMenu> = () => {
    return menu;
  };

  findRecipe: FindRecipe<MainCourseId, MainCourseRecipe> = async (id) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
