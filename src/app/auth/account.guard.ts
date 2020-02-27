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
import { AmplifyService } from 'aws-amplify-angular';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { pairwise } from 'rxjs/operators';
import 'rxjs/operator/filter';
@Injectable({
    providedIn: 'root',
})
export class AccountGuard implements CanActivate {
    signedIn = false;
    user;
    previousUrl;
    constructor(
        private location: Location,
        private amplifyService: AmplifyService,
        private router: Router
    ) {
        this.amplifyService.authStateChange$.subscribe(authState => {
            console.log('authStateChange$', authState);
            this.signedIn = authState.state === 'signedIn';
            if (!authState.user) {
                this.user = null;
            } else {
                this.user = authState.user;
                // this.greeting = 'Hello ' + this.user.username;
                // this.router.navigate(['/home']);
            }
        });

        //     .filter(e => e instanceof RoutesRecognized)
        // .pairwise()
        // .subscribe((event: any[]) => {
        //   console.log(event[0].urlAfterRedirects);
        // });

        this.router.events.pipe(pairwise()).subscribe((e: any) => {
            console.log('prev:', this.previousUrl);
            this.previousUrl = e.url;
        });
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.signedIn) {
            return true;
        }
        console.log(this.signedIn);
        console.log();
        // this.router.navigate(['home']);
        console.log(this.location.getState());
        this.location.subscribe(state => {
            console.log(state);
        });
        // this.location.back();
        return false;
    }
}
