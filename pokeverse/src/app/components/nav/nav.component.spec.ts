import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatToolbar],
      declarations: [NavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render navbar', () => {
    expect(component).toBeTruthy();
  });

});
