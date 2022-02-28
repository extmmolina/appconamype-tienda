import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexHaciendaPage } from './index-hacienda.page';

describe('IndexHaciendaPage', () => {
  let component: IndexHaciendaPage;
  let fixture: ComponentFixture<IndexHaciendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHaciendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexHaciendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
