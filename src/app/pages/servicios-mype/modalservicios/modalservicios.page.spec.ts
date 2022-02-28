import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalserviciosPage } from './modalservicios.page';

describe('ModalserviciosPage', () => {
  let component: ModalserviciosPage;
  let fixture: ComponentFixture<ModalserviciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalserviciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalserviciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
