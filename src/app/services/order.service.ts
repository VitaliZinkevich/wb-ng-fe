import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public currentOrder;
    private orderForm = new FormGroup({
        tel: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        touristsData: new FormArray([]),
        email: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
    });
    constructor() {}
    public savePreOrder(order) {
        this.currentOrder = order;
    }
    public getPreOrder() {
        return this.currentOrder;
    }
    public getOrderForm() {
        const data = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
        });
        if (this.currentOrder) {
            const tourists = this.orderForm.get('touristsData') as FormArray;
            const n = +this.currentOrder.adults + +this.currentOrder.children;
            for (let i = 0; i < n; i++) {
                tourists.push(data);
            }
            return this.orderForm;
        }
    }
    public saveOrder() {
        console.log(this.orderForm.value);
    }
}
