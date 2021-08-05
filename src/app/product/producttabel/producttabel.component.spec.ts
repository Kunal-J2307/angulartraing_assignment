import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttabelComponent } from './producttabel.component';

describe('ProducttabelComponent', () => {
  let component: ProducttabelComponent;
  let fixture: ComponentFixture<ProducttabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
