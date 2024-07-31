import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from './appetizers/appetizers.module';
import { DessertsModule } from './desserts/desserts.module';
import { DrinksModule } from './drinks/drinks.module';
import { MainCoursesModule } from './main-courses/main-courses.module';
import { SideDishesModule } from './side-dishes/side-dishes.module';
import { SoupsModule } from './soups/soups.module';

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
