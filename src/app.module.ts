import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from './appetizers/appetizers.module';
import { DessertsModule } from './desserts/desserts.module';

@Module({
  imports: [AppetizersModule, DessertsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
