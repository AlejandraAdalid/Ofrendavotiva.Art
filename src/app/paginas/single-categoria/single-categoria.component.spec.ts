import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoriaComponent } from './single-categoria.component';

describe('SingleCategoriaComponent', () => {
  let component: SingleCategoriaComponent;
  let fixture: ComponentFixture<SingleCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
