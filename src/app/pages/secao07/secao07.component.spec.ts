import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao07Component } from './secao07.component';

describe('Secao07Component', () => {
  let component: Secao07Component;
  let fixture: ComponentFixture<Secao07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao07Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
