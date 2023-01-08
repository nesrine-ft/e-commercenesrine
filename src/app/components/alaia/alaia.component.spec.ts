import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaiaComponent } from './alaia.component';

describe('AlaiaComponent', () => {
  let component: AlaiaComponent;
  let fixture: ComponentFixture<AlaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlaiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
