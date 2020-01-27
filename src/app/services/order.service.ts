import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    currentOrder;
    private orderForm = new FormGroup({
        tel: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        touristsData: new FormArray([]),
    });
    constructor() {}
    savePreOrder(order) {
        this.currentOrder = order;
    }
    getPreOrder() {
        return this.currentOrder;
    }
    getOrderForm() {
        let data = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
        });
        let tourists = this.orderForm.get('touristsData') as FormArray;
        let n = +this.currentOrder.adults + +this.currentOrder.children;
        for (let i = 0; i < n; i++) {
            console.log(i);
            tourists.push(data);
        }
        return this.orderForm;
    }
}
