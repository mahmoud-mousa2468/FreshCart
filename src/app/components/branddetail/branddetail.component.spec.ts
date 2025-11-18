import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddetailComponent } from './branddetail.component';

describe('BranddetailComponent', () => {
  let component: BranddetailComponent;
  let fixture: ComponentFixture<BranddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranddetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
