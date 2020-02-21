import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from './../services/hotels.service';

@Component({
    selector: 'app-detailes',
    templateUrl: './detailes.page.html',
    styleUrls: ['./detailes.page.scss'],
})
export class DetailesPage implements OnInit {
    id: string;
    hotel;
    sub1;
    constructor(
        private route: ActivatedRoute,
        private hotelsService: HotelsService,
        private router: Router
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.sub1 = this.hotelsService.api.subscribe(data => {
            let hotels: any = data;
            this.hotel = hotels.find(el => {
                return el._id === this.id;
            });
        });
    }

    roomDetailes(room) {
        this.router.navigate([`/room-detailes/${room._id}`]);
    }
}
