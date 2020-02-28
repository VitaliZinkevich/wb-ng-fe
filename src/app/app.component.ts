import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

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
        private amplifyService: AmplifyService,
        private router: Router
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
                    if (menu) {
                        menu.title = 'Вход';
                        menu.url = '/auth';
                    }
                } else {
                    this.user = authState.user;

                    let menu = this.appPages.find(el => {
                        return el.title === 'Вход';
                    });
                    if (menu) {
                        menu.title = 'Личный кабинет';
                        menu.url = '/auth/app-account';
                    }
                }
            }
        );

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
