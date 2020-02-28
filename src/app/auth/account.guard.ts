import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    RoutesRecognized,
    UrlTree,
    NavigationEnd,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { pairwise, shareReplay, share } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class AccountGuard implements CanActivate {
    signedIn = false;
    user;
    previousUrl;
    currentAuthenticatedUser$;
    constructor(
        private location: Location,
        private amplifyService: AmplifyService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.amplifyService.authStateChange$.subscribe(authState => {
            // console.log('authStateChange$', authState);
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

    setup() {
        this.currentAuthenticatedUser$ = this.currentAuthenticatedUser().subscribe(
            user => {
                console.log(user);
                if (user) {
                    this.signedIn = true;
                }
            }
        );
    }

    currentAuthenticatedUser() {
        return Observable.fromPromise(Auth.currentAuthenticatedUser()).pipe(
            share()
        );
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        let login = await this.currentAuthenticatedUser().toPromise();
        let logintestforShareRepaly = this.currentAuthenticatedUser().subscribe(
            data => {
                console.log(data);
            }
        );
        if (login) {
            return true;
        }
        // этот редирект не работает и вообще все падает на попытку перехода
        this.router
            .navigate(['auth'])
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.log(e);
            });

        return false;
    }
}
