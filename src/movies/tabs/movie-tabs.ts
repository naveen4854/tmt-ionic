import { MovieSearch } from './../search/movie-search';
import { MoviePost } from './../post/movie-post';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'movie-tabs.html'
})
export class MovieTabs {

  tab1Root = MoviePost;
  tab2Root = MovieSearch;

  constructor() {

  }
}
