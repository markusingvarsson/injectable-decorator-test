// Example comes from Angular Documentation on @Injectable -> https://angular.io/api/core/Injectable#usage-notes

import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// @Injectable()
class UsefulService {
  usefulGreeting = 'useful greeting';
}

// @Injectable()
class NeedsService {
  constructor() {}
  public service: UsefulService = inject(UsefulService);
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: ` <h1>{{ needsService.service.usefulGreeting }}</h1> `,
})
export class App {
  name = 'Angular';
  needsService = inject(NeedsService);
  constructor() {}
}
bootstrapApplication(App, { providers: [NeedsService, UsefulService] });
