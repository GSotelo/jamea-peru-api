import { Module } from '@nestjs/common';
import { MainCoursesService } from './main-courses.service';
import { MainCoursesController } from './main-courses.controller';

@Module({
  providers: [MainCoursesService],
  controllers: [MainCoursesController],
})
export class MainCoursesModule {}
