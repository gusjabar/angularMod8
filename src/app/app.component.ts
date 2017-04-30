

import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import $ from 'jquery';
import { SpotifyService } from './spotify.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'Angular for beginners: Module VIII';
  elementRef: ElementRef;
  _sportifyService: SpotifyService;
  ngOnInit() {
    var keyups = Observable
      .fromEvent($('#search'), 'keyup')
      .map(e => e['target'].value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(searchText => this._sportifyService.getArtists(searchText));

    keyups.subscribe(data => console.log(data));
  }
  constructor(private spotifyService: SpotifyService
    , elementRef: ElementRef) {
    this.elementRef = elementRef;
    this._sportifyService = spotifyService;
  }
}
