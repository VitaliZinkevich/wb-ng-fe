import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
    selector: 'app-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit, OnDestroy {
    public preOrder;
    public form;
    public tourists;
    constructor(
        private orderService: OrderService,
        private amplifyService: AmplifyService
    ) {
        /** now you can access category APIs:
         * this.amplifyService.auth();          // AWS Amplify Auth
         * this.amplifyService.analytics();     // AWS Amplify Analytics
         * this.amplifyService.storage();       // AWS Amplify Storage
         * this.amplifyService.api();           // AWS Amplify API
         * this.amplifyService.cache();         // AWS Amplify Cache
         * this.amplifyService.pubsub();        // AWS Amplify PubSub
         **/
        this.form = this.orderService.getOrderForm();
        if (this.form) {
            this.tourists = this.form.get('touristsData') as FormArray;
        }
    }

    public ngOnInit() {
        this.preOrder = this.orderService.getPreOrder();
    }

    public ngOnDestroy() {
        this.form = null;
    }

    public saveOrder() {
        this.orderService.saveOrder();
    }
}
