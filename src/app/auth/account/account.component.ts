import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
    constructor(private orderService: OrderService) {}

    ngOnInit() {
        console.log(this.orderService);
        this.orderService.getOrders().subscribe(orders => {
            console.log(orders);
        });
    }
}
