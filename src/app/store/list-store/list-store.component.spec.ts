import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoreComponent } from './list-store.component';

describe('ListStoreComponent', () => {
  let component: ListStoreComponent;
  let fixture: ComponentFixture<ListStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
