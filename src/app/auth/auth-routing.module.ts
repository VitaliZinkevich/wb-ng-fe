import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
    {
        path: '',
        component: AuthPage,
    },
    {
        path: '/app-account',
        component: AccountComponent,
        outlet: 'auth',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule],
})
export class AuthPageRoutingModule {}
