import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVinylComponent } from './form-vinyl.component';

describe('FormVinylComponent', () => {
  let component: FormVinylComponent;
  let fixture: ComponentFixture<FormVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVinylComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
