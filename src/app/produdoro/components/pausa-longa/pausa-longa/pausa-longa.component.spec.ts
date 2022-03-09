import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausaLongaComponent } from './pausa-longa.component';

describe('PausaLongaComponent', () => {
  let component: PausaLongaComponent;
  let fixture: ComponentFixture<PausaLongaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PausaLongaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PausaLongaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
