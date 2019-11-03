import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoredComponent } from './estadored.component';

describe('EstadoredComponent', () => {
  let component: EstadoredComponent;
  let fixture: ComponentFixture<EstadoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
