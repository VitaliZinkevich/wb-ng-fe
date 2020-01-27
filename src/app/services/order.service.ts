import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    currentOrder;
    constructor() {}
    savePreOrder(order) {
        this.currentOrder = order;
    }
    getPreOrder() {
        return this.currentOrder;
    }
}
