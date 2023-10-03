import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductsComponent } from './image-products.component';

describe('ImageProductsComponent', () => {
  let component: ImageProductsComponent;
  let fixture: ComponentFixture<ImageProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProductsComponent]
    });
    fixture = TestBed.createComponent(ImageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
