import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailesPage } from './detailes.page';

describe('DetailesPage', () => {
    let component: DetailesPage;
    let fixture: ComponentFixture<DetailesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailesPage],
            imports: [IonicModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(DetailesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
