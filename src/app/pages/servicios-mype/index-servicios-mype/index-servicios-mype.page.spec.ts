import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexServiciosMypePage } from './index-servicios-mype.page';

describe('IndexServiciosMypePage', () => {
  let component: IndexServiciosMypePage;
  let fixture: ComponentFixture<IndexServiciosMypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexServiciosMypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexServiciosMypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
