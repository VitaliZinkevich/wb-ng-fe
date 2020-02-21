import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomDetailesPage } from './room-detailes.page';

describe('RoomDetailesPage', () => {
  let component: RoomDetailesPage;
  let fixture: ComponentFixture<RoomDetailesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomDetailesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
