import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausaCurtaComponent } from './pausa-curta.component';

describe('PausaCurtaComponent', () => {
  let component: PausaCurtaComponent;
  let fixture: ComponentFixture<PausaCurtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PausaCurtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PausaCurtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
