import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestuclassComponent } from './updatestuclass.component';

describe('UpdatestuclassComponent', () => {
  let component: UpdatestuclassComponent;
  let fixture: ComponentFixture<UpdatestuclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestuclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestuclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
