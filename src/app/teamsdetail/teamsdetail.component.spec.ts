import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsdetailComponent } from './teamsdetail.component';

describe('TeamsdetailComponent', () => {
  let component: TeamsdetailComponent;
  let fixture: ComponentFixture<TeamsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsdetailComponent]
    });
    fixture = TestBed.createComponent(TeamsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
