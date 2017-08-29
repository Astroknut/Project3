import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersComponent } from './helpers.component';

describe('HelpersComponent', () => {
  let component: HelpersComponent;
  let fixture: ComponentFixture<HelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
