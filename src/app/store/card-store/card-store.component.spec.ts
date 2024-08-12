import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoreComponent } from './card-store.component';

describe('CardStoreComponent', () => {
  let component: CardStoreComponent;
  let fixture: ComponentFixture<CardStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
