import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from './../services/hotels.service';

@Component({
    selector: 'app-room-detailes',
    templateUrl: './room-detailes.page.html',
    styleUrls: ['./room-detailes.page.scss'],
})
export class RoomDetailesPage implements OnInit {
    roomId: string;
    sub1;
    room;
    hotel;
    constructor(
        private route: ActivatedRoute,
        private hotelsService: HotelsService
    ) {}

    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('roomId');
        this.sub1 = this.hotelsService.api.subscribe(data => {
            let hotels: any = data;
            for (let i = 0; i < hotels.length; i++) {
                let rooms = hotels[i].rooms;
                let room = rooms.find(el => el._id === this.roomId);
                if (room) {
                    this.room = room;
                    this.hotel = hotels[i];
                    break;
                }
            }
        });
    }
}
