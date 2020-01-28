import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
    public preOrder;
    public form;
    public tourists;
    constructor(private orderService: OrderService) {
        this.form = this.orderService.getOrderForm();
        if (this.form) {
            this.tourists = this.form.get('touristsData') as FormArray;
        }
    }

    public ngOnInit() {
        this.preOrder = this.orderService.getPreOrder();
    }

    public saveOrder() {
        this.orderService.saveOrder();
    }
}
