import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import $ from 'jquery';

// @Injectable()
export class SpotifyService {
    getArtists (search: string) {
        var url = 'https://api.spotify.com/v1/search?type=artist&q=' + search;
        var promise = $.getJSON(url);
        return Observable.fromPromise(promise);
    }
}