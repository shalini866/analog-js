import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideFileRouter , routes } from '@analogjs/router';
import { mainProviders } from './main.server';

console.log(routes)
bootstrapApplication(AppComponent, {
    providers : [provideFileRouter(), ...mainProviders]
});
