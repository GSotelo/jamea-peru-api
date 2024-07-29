import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from './appetizers/appetizers.module';
import { DessertsModule } from './desserts/desserts.module';
import { DrinksModule } from './drinks/drinks.module';

@Module({
  imports: [AppetizersModule, DessertsModule, DrinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
