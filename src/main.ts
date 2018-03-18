//This is the part where our application starts bootstrapping (loading).

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular 2 can be used not just in browsers, but also on other platforms such as mobile apps or even desktop apps. So, when we start our application we have to specify what platform we want to target. 
// That’s why we import: platform-browser-dynamic. We are loading our AppModule into browser platform. 

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
