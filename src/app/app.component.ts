

import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular for beginners: Module VIII';
  elementRef: ElementRef;
  ngOnInit() {
    var keyups = Observable
      .fromEvent($('#search'), 'keyup')
      .map(e => e['target'].value)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(searchText => {
        var url = 'https://api.spotify.com/v1/search?type=artist&q=' + searchText;
        var promise = $.getJSON(url);
        return Observable.fromPromise(promise);
      });

    keyups.subscribe(data => console.log(data));
  }
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
}
