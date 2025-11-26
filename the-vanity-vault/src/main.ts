// main.ts
import 'zone-flags';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeList } from './app/home-list/home-list';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(HomeList, {
  providers: [
    provideHttpClient()
    // Add other providers here as needed
  ]
}).catch(err => console.error(err));