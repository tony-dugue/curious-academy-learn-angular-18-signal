import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVinylCategorieComponent } from './add-vinyl-categorie.component';

describe('AddVinylCategorieComponent', () => {
  let component: AddVinylCategorieComponent;
  let fixture: ComponentFixture<AddVinylCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVinylCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVinylCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
