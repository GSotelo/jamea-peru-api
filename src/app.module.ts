import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppetizersModule } from './appetizers/appetizers.module';

@Module({
  imports: [AppetizersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
