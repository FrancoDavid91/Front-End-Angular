import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardsoftskillComponent } from './hardsoftskill.component';

describe('HardsoftskillComponent', () => {
  let component: HardsoftskillComponent;
  let fixture: ComponentFixture<HardsoftskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardsoftskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardsoftskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
