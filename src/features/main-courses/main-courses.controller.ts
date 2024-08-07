import { Controller, Get, Param } from '@nestjs/common';
import { MainCoursesService } from './main-courses.service';
import type { MainCourseId } from '@mainCourses/main-courses.types';

@Controller({
  path: 'main-courses',
  version: '1',
})
export class MainCoursesController {
  constructor(private readonly mainCoursesService: MainCoursesService) {}

  @Get()
  findMenu() {
    return this.mainCoursesService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: MainCourseId) {
    return this.mainCoursesService.findRecipe(id);
  }
}
