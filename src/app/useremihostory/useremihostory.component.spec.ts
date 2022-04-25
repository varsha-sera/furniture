import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseremihostoryComponent } from './useremihostory.component';

describe('UseremihostoryComponent', () => {
  let component: UseremihostoryComponent;
  let fixture: ComponentFixture<UseremihostoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseremihostoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseremihostoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
