import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclasssubComponent } from './updateclasssub.component';

describe('UpdateclasssubComponent', () => {
  let component: UpdateclasssubComponent;
  let fixture: ComponentFixture<UpdateclasssubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclasssubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclasssubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
