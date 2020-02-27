import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './auth/account/account.component';
import { AccountGuard } from './auth/account.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then(m => m.HomePageModule),
    },
    {
        path: 'list',
        loadChildren: () =>
            import('./list/list.module').then(m => m.ListPageModule),
    },
    {
        path: 'order',
        loadChildren: () =>
            import('./order/order.module').then(m => m.OrderPageModule),
        canActivate: [AccountGuard],
    },
    {
        path: 'detailes/:id',
        loadChildren: () =>
            import('./detailes/detailes.module').then(
                m => m.DetailesPageModule
            ),
    },
    {
        path: 'room-detailes/:roomId',
        loadChildren: () =>
            import('./room-detailes/room-detailes.module').then(
                m => m.RoomDetailesPageModule
            ),
    },

    {
        path: 'room-detailes',
        loadChildren: () =>
            import('./room-detailes/room-detailes.module').then(
                m => m.RoomDetailesPageModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.module').then(m => m.AuthPageModule),
    },
    // {
    //     path: 'auth/account',
    //     component: AccountComponent,
    //     loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
