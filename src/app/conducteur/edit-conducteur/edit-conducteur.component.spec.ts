import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConducteurComponent } from './edit-conducteur.component';

describe('EditConducteurComponent', () => {
  let component: EditConducteurComponent;
  let fixture: ComponentFixture<EditConducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
