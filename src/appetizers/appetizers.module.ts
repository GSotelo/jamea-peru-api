import { Module } from '@nestjs/common';
import { AppetizersController } from './appetizers.controller';

@Module({
  controllers: [AppetizersController],
})
export class AppetizersModule {}
