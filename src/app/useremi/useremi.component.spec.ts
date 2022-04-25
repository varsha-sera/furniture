import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseremiComponent } from './useremi.component';

describe('UseremiComponent', () => {
  let component: UseremiComponent;
  let fixture: ComponentFixture<UseremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseremiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
