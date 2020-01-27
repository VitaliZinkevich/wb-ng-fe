import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
    preOrder;
    form;
    tourists;
    constructor(private orderService: OrderService) {
        this.form = this.orderService.getOrderForm();
        this.tourists = this.form.get('touristsData') as FormArray;
        console.log(this.tourists);
    }

    ngOnInit() {
        this.preOrder = this.orderService.getPreOrder();
    }
}
