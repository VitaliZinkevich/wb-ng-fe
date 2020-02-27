import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { AccountComponent } from './account/account.component';
import { AccountGuard } from './account.guard';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [],
    },
    {
        path: 'app-account',
        component: AccountComponent,
        canActivate: [AccountGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {}
