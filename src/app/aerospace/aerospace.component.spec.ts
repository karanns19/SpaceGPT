import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerospaceComponent } from './aerospace.component';

describe('AerospaceComponent', () => {
  let component: AerospaceComponent;
  let fixture: ComponentFixture<AerospaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerospaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerospaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
