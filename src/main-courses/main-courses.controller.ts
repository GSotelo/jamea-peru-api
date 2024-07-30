import { Controller, Get } from '@nestjs/common';
import { MainCoursesService } from './main-courses.service';

@Controller('main-courses')
export class MainCoursesController {
  constructor(private readonly mainCoursesService: MainCoursesService) {}

  @Get()
  getMainCourses() {
    return this.mainCoursesService.findAll();
  }
}
