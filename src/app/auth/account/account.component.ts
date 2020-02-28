import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../services/order.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
    orderService$;
    constructor(private orderService: OrderService) {}

    ngOnInit() {
        this.orderService$ = this.orderService.getOrders().subscribe(orders => {
            console.log(orders);
        });
    }

    ngOnDestroy() {
        this.orderService$.unsubscribe();
    }
}
