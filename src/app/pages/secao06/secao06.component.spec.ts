import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao06Component } from './secao06.component';

describe('Secao06Component', () => {
  let component: Secao06Component;
  let fixture: ComponentFixture<Secao06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao06Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
