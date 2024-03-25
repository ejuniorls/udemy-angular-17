import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao11Component } from './secao11.component';

describe('Secao11Component', () => {
  let component: Secao11Component;
  let fixture: ComponentFixture<Secao11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
