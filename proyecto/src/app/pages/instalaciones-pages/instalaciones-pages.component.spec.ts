import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesPagesComponent } from './instalaciones-pages.component';

describe('InstalacionesPagesComponent', () => {
  let component: InstalacionesPagesComponent;
  let fixture: ComponentFixture<InstalacionesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
