import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTlComponent } from './employees-tl.component';

describe('EmployeesTlComponent', () => {
  let component: EmployeesTlComponent;
  let fixture: ComponentFixture<EmployeesTlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesTlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
