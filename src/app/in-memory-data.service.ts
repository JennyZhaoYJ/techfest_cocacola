import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const machines = [
      { id: 1, name: 'Labeller', speed:60500, comment:'null' },
      { id: 2, name: 'Filler' , speed:32000,comment:'null'}
    ];
    return {machines};
  }
}