import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponentsComponent } from './image-components.component';

describe('ImageComponentsComponent', () => {
  let component: ImageComponentsComponent;
  let fixture: ComponentFixture<ImageComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
