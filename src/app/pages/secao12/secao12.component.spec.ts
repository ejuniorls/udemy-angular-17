import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao12Component } from './secao12.component';

describe('Secao12Component', () => {
  let component: Secao12Component;
  let fixture: ComponentFixture<Secao12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
