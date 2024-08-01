import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from '@src/app/appetizers/appetizers.module';
import { DessertsModule } from '@src/app/desserts/desserts.module';
import { DrinksModule } from '@src/app/drinks/drinks.module';
import { MainCoursesModule } from '@src/app/main-courses/main-courses.module';
import { SideDishesModule } from '@src/app/side-dishes/side-dishes.module';
import { SoupsModule } from '@src/app/soups/soups.module';

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
