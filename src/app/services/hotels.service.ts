import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, share } from 'rxjs/operators';

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
        return this.http.get(
            'https://5g1bclrzf9.execute-api.us-east-1.amazonaws.com/production/hotel'
        );
    }
}
