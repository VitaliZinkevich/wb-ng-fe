import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { API } from 'aws-amplify';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public signedIn;
    public user;
    public currentOrder;
    private orderForm = new FormGroup({
        tel: new FormControl('', [
            Validators.required,
            // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        ]),
        touristsData: new FormArray([]),
        // email: new FormControl('', [
        //     Validators.required,
        //     // Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
        // ]),
    });
    constructor(private amplifyService: AmplifyService) {
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
    }
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
            passNumber: new FormControl('', Validators.required),
            passValidTill: new FormControl('', Validators.required),
            birthDate: new FormControl('', Validators.required),
        });
        if (this.currentOrder) {
            let tourists = this.orderForm.get('touristsData') as FormArray;
            const n = +this.currentOrder.adults + +this.currentOrder.children;
            if (!tourists.length || n !== tourists.length) {
                tourists.clear();
                for (let i = 0; i < n; i++) {
                    tourists.push(data);
                }
            }
            return this.orderForm;
        }
    }

    public getOrders() {
        return Observable.fromPromise(API.get('order', '/order', {}));
    }

    public saveOrder() {
        const order = {
            user: '',
            dateOfCreation: new Date(),
            tel: this.orderForm.value.tel,
            // form: this.orderForm.value,
            // preOrder: this.getPreOrder(),
        };
        console.log(order);

        return Observable.fromPromise(
            API.post('order', '/order', {
                body: { order },
            })
        );

        // переход на подтверждение кода с почты и потом отправка заказа
        // авто создание аккаунта
        // if (!this.signedIn) {
        //     return Observable.fromPromise(
        //         Auth.signUp({
        //             username: this.orderForm.value.email,
        //             password: '12345678',
        //             attributes: {
        //                 email: this.orderForm.value.email, // optional
        //                 // optional - E.164 number convention
        //                 // other custom attributes
        //             },
        //         })
        //     ).subscribe(data => {
        //         console.log(data);
        //     });
        // } else {
        // }
    }
}
