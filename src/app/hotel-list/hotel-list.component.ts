import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit {
    @Input() public filtredHotels: any[];
    @Input() public searchForm;

    public selectedHotelsArray = [];
    constructor(private router: Router) {}

    public ngOnInit() {}

    public selectChange(data) {
        if (this.selectedHotelsArray.indexOf(data) > -1) {
            this.selectedHotelsArray = this.selectedHotelsArray.filter(id => {
                return id !== data;
            });
        } else {
            this.selectedHotelsArray.push(data);
        }
        this.searchForm.value.selectedHotels = this.selectedHotelsArray;
    }
    public detailesView(id) {
        this.router.navigate([`/detailes/${id}`]);
    }
}
