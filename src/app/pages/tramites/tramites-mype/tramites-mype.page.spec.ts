import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TramitesMypePage } from './tramites-mype.page';

describe('TramitesMypePage', () => {
  let component: TramitesMypePage;
  let fixture: ComponentFixture<TramitesMypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramitesMypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TramitesMypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
