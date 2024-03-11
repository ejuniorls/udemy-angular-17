import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao04Component } from './secao04.component';

describe('Secao04Component', () => {
  let component: Secao04Component;
  let fixture: ComponentFixture<Secao04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
