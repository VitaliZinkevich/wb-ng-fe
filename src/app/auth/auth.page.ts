// организовать вхо в личный кабинет если пришли на логин напрямую иначе обратно на страт редиректа
import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

import { I18n } from 'aws-amplify';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

const authScreenLabels = {
    ru: {
        'Username cannot be empty': 'Email не может быть пуст',
        'Sign in to your account': 'Войти в аккаунт',
        Username: 'Email',
        'Sign In': 'Войти',
        'Sign Up Account': 'Создать новый аккаунт',
    },
};
I18n.setLanguage('ru');
I18n.putVocabularies(authScreenLabels);

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    usernameAttributes = 'email';
    signUpConfig = {
        header: 'Sing Up',
        hideAllDefaults: true,
        // defaultCountryCode: '7',
        signUpFields: [
            {
                label: 'Email',
                key: 'email',
                required: true,
                displayOrder: 1,
                type: 'string',
            },
            {
                label: 'Password',
                key: 'password',
                required: true,
                displayOrder: 2,
                type: 'password',
            },
            // {
            //     label: 'Phone Number',
            //     key: 'phone_number',
            //     required: true,
            //     displayOrder: 3,
            //     type: 'string',
            // },
            // {
            //     label: 'Custom Attribute',
            //     key: 'custom_attr',
            //     required: false,
            //     displayOrder: 4,
            //     type: 'string',
            //     custom: true,
            // },
        ],
    };
    signedIn: boolean;
    user: any;
    greeting: string;
    authStateChange$;
    // https://stackoverflow.com/questions/35446955/how-to-go-back-last-page
    constructor(
        private amplifyService: AmplifyService,
        private router: Router
    ) {
        this.authStateChange$ = this.amplifyService.authStateChange$.subscribe(
            authState => {
                console.log('authStateChange$', authState);
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
    }

    ngOnInit() {}
    ngOnDestroy() {
        this.authStateChange$.unsubscribe();
    }
    logOut() {
        Auth.signOut().catch(err => console.log(err));
    }
}
