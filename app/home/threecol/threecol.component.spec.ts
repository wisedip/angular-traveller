import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecolComponent } from './threecol.component';

describe('ThreecolComponent', () => {
  let component: ThreecolComponent;
  let fixture: ComponentFixture<ThreecolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreecolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
