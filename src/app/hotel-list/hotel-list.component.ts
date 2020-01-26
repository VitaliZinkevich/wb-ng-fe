import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit {
    @Input() public filtredHotels: any[];
    @Input() public searchForm;

    public selectedHotelsArray = [];
    constructor() {}

    public ngOnInit() {}

    public selectChange(data) {
        console.log(this.selectedHotelsArray.indexOf(data));
        if (this.selectedHotelsArray.indexOf(data) > -1) {
            this.selectedHotelsArray = this.selectedHotelsArray.filter(id => {
                return id !== data;
            });
        } else {
            this.selectedHotelsArray.push(data);
        }
        this.searchForm.selectedHotels = this.selectedHotelsArray;
    }
}
