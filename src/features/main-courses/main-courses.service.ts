import { Injectable } from '@nestjs/common';
import { menu } from './recipes/menu';
import type {
  MainCourseId,
  MainCourseMenu,
  MainCourseRecipe,
} from './main-courses.types';

export type FindMenu = () => MainCourseMenu;
export type FindRecipe = (id: MainCourseId) => Promise<MainCourseRecipe>;

@Injectable()
export class MainCoursesService {
  findMenu: FindMenu = () => {
    return menu;
  };

  findRecipe: FindRecipe = async (id: MainCourseId) => {
    const recipe = `./recipes/${id}`;
    return await import(recipe);
  };
}
