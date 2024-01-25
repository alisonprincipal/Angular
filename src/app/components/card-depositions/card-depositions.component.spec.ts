import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepositionsComponent } from './card-depositions.component';

describe('CardDepositionsComponent', () => {
  let component: CardDepositionsComponent;
  let fixture: ComponentFixture<CardDepositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
