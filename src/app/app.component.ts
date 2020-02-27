import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    authStateChange$;
    signedIn;
    user;
    public appPages = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private amplifyService: AmplifyService
    ) {
        this.authStateChange$ = this.amplifyService.authStateChange$.subscribe(
            authState => {
                console.log('authStateChange$', authState);
                this.signedIn = authState.state === 'signedIn';
                if (!authState.user) {
                    this.user = null;
                    let menu = this.appPages.find(el => {
                        return el.title === 'Личный кабинет';
                    });
                    menu.title = 'Вход';
                } else {
                    this.user = authState.user;
                    let menu = this.appPages.find(el => {
                        return el.title === 'Вход';
                    });
                    menu.title = 'Личный кабинет';

                    // this.greeting = 'Hello ' + this.user.username;
                    // this.router.navigate(['/home']);
                }
            }
        );
        // if (this.signedIn) {
        //     this.amplifyService.setAuthState({
        //         state: 'SignIn',
        //         user: this.user,
        //     });
        // }

        this.appPages = [
            {
                title: 'Вход',
                url: '/auth',
                icon: 'log-in',
            },
            {
                title: 'Поиск',
                url: '/home',
                icon: 'search',
            },

            // {
            //     title: 'Order',
            //     url: '/order',
            //     icon: 'list',
            // },
        ];

        this.initializeApp();
    }

    ngOnDestroy() {
        this.authStateChange$.unsubscribe();
    }

    public initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
