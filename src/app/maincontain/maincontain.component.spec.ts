import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontainComponent } from './maincontain.component';

describe('MaincontainComponent', () => {
  let component: MaincontainComponent;
  let fixture: ComponentFixture<MaincontainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincontainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
