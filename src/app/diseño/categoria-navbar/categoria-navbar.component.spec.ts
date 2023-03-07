import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaNavbarComponent } from './categoria-navbar.component';

describe('CategoriaNavbarComponent', () => {
  let component: CategoriaNavbarComponent;
  let fixture: ComponentFixture<CategoriaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
