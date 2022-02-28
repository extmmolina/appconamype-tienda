import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroTabsPage } from './registro-tabs.page';

describe('RegistroTabsPage', () => {
  let component: RegistroTabsPage;
  let fixture: ComponentFixture<RegistroTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
