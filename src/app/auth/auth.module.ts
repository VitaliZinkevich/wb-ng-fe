import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthPage } from './auth.page';
import { AccountComponent } from './account/account.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule,
        AmplifyAngularModule,
    ],
    declarations: [AuthPage, AccountComponent],
    providers: [AmplifyService],
})
export class AuthPageModule {}
