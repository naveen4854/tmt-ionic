import { MovieService } from './service/movies.service';
import { MovieSearch } from './search/movie-search';
import { MoviePost } from './post/movie-post';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieTabs } from './tabs/movie-tabs';

@NgModule({
    declarations: [
        MoviePost,
        MovieSearch,
        MovieTabs
    ],
    imports: [
        BrowserModule,
        IonicModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MoviePost,
        MovieSearch,
        MovieTabs
    ],
    providers: [
        StatusBar,
        SplashScreen,
        MovieService
    ]
})
export class MovieModule { }
