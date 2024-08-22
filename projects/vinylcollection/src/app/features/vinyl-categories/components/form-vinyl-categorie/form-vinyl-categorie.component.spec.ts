import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVinylCategorieComponent } from './form-vinyl-categorie.component';

describe('FormVinylCategorieComponent', () => {
  let component: FormVinylCategorieComponent;
  let fixture: ComponentFixture<FormVinylCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVinylCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVinylCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
