import { MovieService } from './../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'movie-post',
  templateUrl: 'movie-post.html'
})
export class MoviePost implements OnInit {

  constructor(public navCtrl: NavController, private _service: MovieService) {

  }
  ngOnInit(): void {
    this._service.getCities().subscribe(cities => {
      console.log(cities);
    });
  }
}
