import { Module } from '@nestjs/common';
import { AppetizersModule } from '@appetizers/appetizers.module';
import { DessertsModule } from '@desserts/desserts.module';
import { DrinksModule } from '@drinks/drinks.module';
import { MainCoursesModule } from '@mainCourses/main-courses.module';
import { SideDishesModule } from '@sideDishes/side-dishes.module';
import { SoupsModule } from '@soups/soups.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AppetizersModule,
    DessertsModule,
    DrinksModule,
    MainCoursesModule,
    SideDishesModule,
    SoupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
