import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVinylsComponent } from './table-vinyls.component';

describe('TableVinylsComponent', () => {
  let component: TableVinylsComponent;
  let fixture: ComponentFixture<TableVinylsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVinylsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVinylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
