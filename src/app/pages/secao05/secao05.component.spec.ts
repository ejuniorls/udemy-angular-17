import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao05Component } from './secao05.component';

describe('Secao05Component', () => {
  let component: Secao05Component;
  let fixture: ComponentFixture<Secao05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
