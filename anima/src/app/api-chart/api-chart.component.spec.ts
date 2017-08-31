import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiChartComponent } from './api-chart.component';

describe('ApiChartComponent', () => {
  let component: ApiChartComponent;
  let fixture: ComponentFixture<ApiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});