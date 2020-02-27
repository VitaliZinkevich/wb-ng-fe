import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { AmplifyService } from 'aws-amplify-angular';
import { CommonsService } from './../services/commons.service';

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
    orderService$;
    amplifyService$;
    constructor(
        private orderService: OrderService,
        private amplifyService: AmplifyService,
        private commonsService: CommonsService
    ) {
        this.amplifyService$ = this.amplifyService.authStateChange$.subscribe(
            authState => {
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                } else {
                    this.user = authState.user;
                    // this.greeting = 'Hello ' + this.user.username;
                    // this.router.navigate(['/home']);
                }
            }
        );

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
        this.orderService$.unsubscribe();
    }

    public async saveOrder() {
        let loader = await this.commonsService.getLoader('Размещение заказа');
        loader.present();
        this.orderService$ = this.orderService.saveOrder().subscribe(data => {
            loader.dismiss();
            console.log(data);
        });
    }
}
