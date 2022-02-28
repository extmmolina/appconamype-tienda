import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroMypePage } from './registro-mype.page';

describe('RegistroMypePage', () => {
  let component: RegistroMypePage;
  let fixture: ComponentFixture<RegistroMypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroMypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
