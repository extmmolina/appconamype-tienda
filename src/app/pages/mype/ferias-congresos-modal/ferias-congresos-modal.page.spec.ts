import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeriasCongresosModalPage } from './ferias-congresos-modal.page';

describe('FeriasCongresosModalPage', () => {
  let component: FeriasCongresosModalPage;
  let fixture: ComponentFixture<FeriasCongresosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriasCongresosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeriasCongresosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
