import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexFinanzasPage } from './index-finanzas.page';

describe('IndexFinanzasPage', () => {
  let component: IndexFinanzasPage;
  let fixture: ComponentFixture<IndexFinanzasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFinanzasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexFinanzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
