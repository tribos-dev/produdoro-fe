import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocosComponent } from './foco.component';

describe('FocosComponent', () => {
  let component: FocosComponent;
  let fixture: ComponentFixture<FocosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
