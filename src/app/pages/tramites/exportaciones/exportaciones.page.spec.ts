import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExportacionesPage } from './exportaciones.page';

describe('ExportacionesPage', () => {
  let component: ExportacionesPage;
  let fixture: ComponentFixture<ExportacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExportacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
