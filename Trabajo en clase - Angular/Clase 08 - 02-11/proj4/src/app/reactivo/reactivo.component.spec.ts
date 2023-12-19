import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoComponent } from './reactivo.component';

describe('ReactivoComponent', () => {
  let component: ReactivoComponent;
  let fixture: ComponentFixture<ReactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivoComponent]
    });
    fixture = TestBed.createComponent(ReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
