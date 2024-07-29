import { Module } from '@nestjs/common';
import { AppetizersController } from './appetizers.controller';
import { AppetizersService } from './appetizers.service';

@Module({
  controllers: [AppetizersController],
  providers: [AppetizersService],
})
export class AppetizersModule {}
