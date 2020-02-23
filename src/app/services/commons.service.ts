import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class CommonsService {
    constructor(private loadingController: LoadingController) {}

    public async getLoader(message) {
        return await this.loadingController.create({
            message: message || 'Загрузка...',
            duration: 0,
        });
    }
}
