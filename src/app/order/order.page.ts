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
    signedIn;
    user;
    constructor(
        private orderService: OrderService,
        private amplifyService: AmplifyService
    ) {
        this.amplifyService.authStateChange$.subscribe(authState => {
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
                // this.greeting = 'Hello ' + this.user.username;
                // this.router.navigate(['/home']);
            }
        });

        this.form = this.orderService.getOrderForm();
        if (this.form) {
            this.tourists = this.form.get('touristsData') as FormArray;
        }
    }

    public ngOnInit() {
        this.preOrder = this.orderService.getPreOrder();
    }

    public ngOnDestroy() {
        console.log('ngOnDestroy');
        this.form = null;
    }

    public saveOrder() {
        this.orderService.saveOrder().subscribe(data => {
            console.log(data);
        });
    }
}
