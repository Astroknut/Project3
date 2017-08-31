import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntryComponent } from './show-entry.component';

describe('ShowEntriesComponent', () => {
  let component: ShowEntryComponent;
  let fixture: ComponentFixture<ShowEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
