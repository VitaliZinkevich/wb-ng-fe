import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class HotelsService {
    // public getHotels;
    // public hotels: any = [];
    constructor(private http: HttpClient) {
        // this.getHotels = () => {
        //     return this.http
        //         .get(
        //             'https://5g1bclrzf9.execute-api.us-east-1.amazonaws.com/production/hotel'
        //         )
        //         .subscribe((data: any) => {
        //             this.hotels = from(data);
        //         });
        // };
        // this.getHotels();
    }
    public getReadyHotels() {
        return this.http.get(
            'https://5g1bclrzf9.execute-api.us-east-1.amazonaws.com/production/hotel'
        );
    }
}
