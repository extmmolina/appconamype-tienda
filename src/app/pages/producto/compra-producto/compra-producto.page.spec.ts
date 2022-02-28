import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraProductoPage } from './compra-producto.page';

describe('CompraProductoPage', () => {
  let component: CompraProductoPage;
  let fixture: ComponentFixture<CompraProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
