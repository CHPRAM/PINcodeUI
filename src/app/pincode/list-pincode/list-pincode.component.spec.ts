import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPincodeComponent } from './list-pincode.component';

describe('ListPincodeComponent', () => {
  let component: ListPincodeComponent;
  let fixture: ComponentFixture<ListPincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
