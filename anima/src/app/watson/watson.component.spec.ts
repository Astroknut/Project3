import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatsonComponent } from './watson.component';

describe('WatsonComponent', () => {
  let component: WatsonComponent;
  let fixture: ComponentFixture<WatsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
