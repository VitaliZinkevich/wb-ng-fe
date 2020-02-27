import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormService } from './services/search-form.service';
import { HotelsService } from './services/hotels.service';
import { OrderService } from './services/order.service';
import { CommonsService } from './services/commons.service';
import {
    AmplifyAngularModule,
    AmplifyIonicModule,
    AmplifyService,
} from 'aws-amplify-angular';
import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        AmplifyAngularModule,
        AmplifyIonicModule,
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        StatusBar,
        SplashScreen,
        SearchFormService,
        HotelsService,
        OrderService,
        AmplifyService,
        CommonsService,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
