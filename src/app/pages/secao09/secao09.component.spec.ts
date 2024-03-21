import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao09Component } from './secao09.component';

describe('Secao09Component', () => {
  let component: Secao09Component;
  let fixture: ComponentFixture<Secao09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
