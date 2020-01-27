import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
    preOrder;
    constructor(private orderService: OrderService) {}

    ngOnInit() {
        this.preOrder = this.orderService.getPreOrder();
        console.log(this.preOrder);
    }
}
