import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cats')
  getDummyCatsData() {
    const cats = this.appService.getCats();

    return {
      status: 'success',
      data: cats,
    };
  }
}
