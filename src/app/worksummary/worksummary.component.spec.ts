import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksummaryComponent } from './worksummary.component';

describe('WorksummaryComponent', () => {
  let component: WorksummaryComponent;
  let fixture: ComponentFixture<WorksummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksummaryComponent]
    });
    fixture = TestBed.createComponent(WorksummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
