import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcreateComponent } from './workcreate.component';

describe('WorkcreateComponent', () => {
  let component: WorkcreateComponent;
  let fixture: ComponentFixture<WorkcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkcreateComponent]
    });
    fixture = TestBed.createComponent(WorkcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
