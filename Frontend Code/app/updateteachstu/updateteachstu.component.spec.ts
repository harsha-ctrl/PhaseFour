import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateteachstuComponent } from './updateteachstu.component';

describe('UpdateteachstuComponent', () => {
  let component: UpdateteachstuComponent;
  let fixture: ComponentFixture<UpdateteachstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateteachstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateteachstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
