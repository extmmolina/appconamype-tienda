import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeriasCongresosPage } from './ferias-congresos.page';

describe('FeriasCongresosPage', () => {
  let component: FeriasCongresosPage;
  let fixture: ComponentFixture<FeriasCongresosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriasCongresosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeriasCongresosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
