import { Controller, Get } from '@nestjs/common';
import { SoupsService } from './soups.service';

@Controller('soups')
export class SoupsController {
  constructor(private readonly soupsService: SoupsService) {}

  @Get()
  getSoups() {
    return this.soupsService.findAll();
  }
}
