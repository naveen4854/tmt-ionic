import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieModule } from '../movies/movie.module';
import { Config } from '../shared/utilities/config';
import { GlobalEventsManager } from '../shared/utilities/global-events-manager';
import { HttpClientModule } from '@angular/common/http';
import { HttpUtility } from '../shared/utilities/http/http-utility.service';

export function moduleResolveFactory(config: Config) {
  return () => config.load();
}

export function moduleResolveFactoryGem(globalEvents: GlobalEventsManager) {
  return () => globalEvents;
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MovieModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Config,
    GlobalEventsManager,
    {
      provide: APP_INITIALIZER,
      useFactory: moduleResolveFactory,
      deps: [Config],
      multi: true
    },
    HttpUtility,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
