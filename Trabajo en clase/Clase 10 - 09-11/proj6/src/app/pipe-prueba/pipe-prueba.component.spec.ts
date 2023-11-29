import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePruebaComponent } from './pipe-prueba.component';

describe('PipePruebaComponent', () => {
  let component: PipePruebaComponent;
  let fixture: ComponentFixture<PipePruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipePruebaComponent]
    });
    fixture = TestBed.createComponent(PipePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
