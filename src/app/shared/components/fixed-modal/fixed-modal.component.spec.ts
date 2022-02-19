import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedModalComponent } from './fixed-modal.component';

describe('FixedModalComponent', () => {
  let component: FixedModalComponent;
  let fixture: ComponentFixture<FixedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
