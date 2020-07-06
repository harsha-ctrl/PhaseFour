import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuteachlistComponent } from './stuteachlist.component';

describe('StuteachlistComponent', () => {
  let component: StuteachlistComponent;
  let fixture: ComponentFixture<StuteachlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuteachlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuteachlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
