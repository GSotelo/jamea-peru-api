import { Injectable } from '@nestjs/common';
import { menu } from '@mainCourses/recipes/menu';
import type { MainCourseMenu } from '@mainCourses/main-courses.types';

type FindMenu = () => MainCourseMenu;

@Injectable()
export class MainCoursesService {
  findAll: FindMenu = () => {
    return menu;
  };
}
