import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from '@src/features/appetizers/appetizers.module';
import { DessertsModule } from '@src/features/desserts/desserts.module';
import { DrinksModule } from '@src/features/drinks/drinks.module';
import { MainCoursesModule } from '@src/features/main-courses/main-courses.module';
import { SideDishesModule } from '@src/features/side-dishes/side-dishes.module';
import { SoupsModule } from '@src/features/soups/soups.module';

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
