import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao08Component } from './secao08.component';

describe('Secao08Component', () => {
  let component: Secao08Component;
  let fixture: ComponentFixture<Secao08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secao08Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Secao08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
