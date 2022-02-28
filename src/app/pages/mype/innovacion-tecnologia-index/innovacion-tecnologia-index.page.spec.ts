import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InnovacionTecnologiaIndexPage } from './innovacion-tecnologia-index.page';

describe('InnovacionTecnologiaIndexPage', () => {
  let component: InnovacionTecnologiaIndexPage;
  let fixture: ComponentFixture<InnovacionTecnologiaIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovacionTecnologiaIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InnovacionTecnologiaIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
