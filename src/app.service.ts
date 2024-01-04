import { Injectable } from '@nestjs/common';
import { Cat } from './types';

@Injectable()
export class AppService {
  getCats(): Cat[] {
    const cats: Cat[] = [
      { name: 'Whiskers', weight: 5.5 },
      { name: 'Mittens', weight: 7.2 },
      { name: 'Fluffy', weight: 6.0 },
      { name: 'Tiger', weight: 8.5 },
      { name: 'Smokey', weight: 4.8 },
      { name: 'Oreo', weight: 6.3 },
      { name: 'Shadow', weight: 5.7 },
      { name: 'Leo', weight: 7.8 },
      { name: 'Cleo', weight: 5.2 },
      { name: 'Simba', weight: 9.0 },
    ];

    return cats;
  }
}
