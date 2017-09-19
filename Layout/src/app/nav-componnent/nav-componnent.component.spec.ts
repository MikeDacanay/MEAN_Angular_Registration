import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponnentComponent } from './nav-componnent.component';

describe('NavComponnentComponent', () => {
  let component: NavComponnentComponent;
  let fixture: ComponentFixture<NavComponnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
