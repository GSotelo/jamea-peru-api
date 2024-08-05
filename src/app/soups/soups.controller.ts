import { Controller, Get, Param } from '@nestjs/common';
import { SoupsService } from './soups.service';
import type { SoupId } from '@soups/soups.types';

@Controller('soups')
export class SoupsController {
  constructor(private readonly soupsService: SoupsService) {}

  @Get()
  getSoups() {
    return this.soupsService.findAll();
  }

  @Get(':id')
  getSoupById(@Param('id') id: SoupId) {
    return this.soupsService.findById(id);
  }
}
