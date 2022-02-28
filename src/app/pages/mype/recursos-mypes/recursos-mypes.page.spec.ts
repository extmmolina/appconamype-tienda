import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecursosMypesPage } from './recursos-mypes.page';

describe('RecursosMypesPage', () => {
  let component: RecursosMypesPage;
  let fixture: ComponentFixture<RecursosMypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosMypesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecursosMypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
