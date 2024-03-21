import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao10Component } from './secao10.component';

describe('Secao10Component', () => {
  let component: Secao10Component;
  let fixture: ComponentFixture<Secao10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
