import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginMypePage } from './login-mype.page';

describe('LoginMypePage', () => {
  let component: LoginMypePage;
  let fixture: ComponentFixture<LoginMypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
