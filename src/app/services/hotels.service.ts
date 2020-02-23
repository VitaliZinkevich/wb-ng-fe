import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { shareReplay, share } from 'rxjs/operators';
import { API } from 'aws-amplify';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class HotelsService {
    private cache$: Observable<{}>;
    constructor(private http: HttpClient) {}
    get api() {
        if (!this.cache$) {
            this.cache$ = this.getReadyHotels().pipe(shareReplay(1));
        }
        return this.cache$;
    }
    private getReadyHotels() {
        return Observable.fromPromise(API.get('hotels', '/hotels', {}));

        // API.get('hotels', '/hotels', {})
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error.response);
        //     });

        // return this.http.get(
        //     'https://5g1bclrzf9.execute-api.us-east-1.amazonaws.com/production/hotel'
        // );
    }
}
