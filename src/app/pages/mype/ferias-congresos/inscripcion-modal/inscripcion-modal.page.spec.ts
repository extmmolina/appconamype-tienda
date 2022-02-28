import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscripcionModalPage } from './inscripcion-modal.page';

describe('InscripcionModalPage', () => {
  let component: InscripcionModalPage;
  let fixture: ComponentFixture<InscripcionModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscripcionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
