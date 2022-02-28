import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedioAmbientePage } from './medio-ambiente.page';

describe('MedioAmbientePage', () => {
  let component: MedioAmbientePage;
  let fixture: ComponentFixture<MedioAmbientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioAmbientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedioAmbientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
