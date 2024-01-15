import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponentsComponent } from './map-components.component';

describe('MapComponentsComponent', () => {
  let component: MapComponentsComponent;
  let fixture: ComponentFixture<MapComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
