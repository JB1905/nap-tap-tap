import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorldClockComponent } from './world-clock.component';

describe('WorldClockComponent', () => {
  let component: WorldClockComponent;
  let fixture: ComponentFixture<WorldClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorldClockComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(WorldClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
