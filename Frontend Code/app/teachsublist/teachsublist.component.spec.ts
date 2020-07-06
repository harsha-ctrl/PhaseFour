import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachsublistComponent } from './teachsublist.component';

describe('TeachsublistComponent', () => {
  let component: TeachsublistComponent;
  let fixture: ComponentFixture<TeachsublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachsublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachsublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
