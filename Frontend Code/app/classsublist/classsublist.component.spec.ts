import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssublistComponent } from './classsublist.component';

describe('ClasssublistComponent', () => {
  let component: ClasssublistComponent;
  let fixture: ComponentFixture<ClasssublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasssublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
