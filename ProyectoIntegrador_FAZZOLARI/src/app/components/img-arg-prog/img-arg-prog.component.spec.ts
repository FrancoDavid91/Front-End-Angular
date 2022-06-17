import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgArgProgComponent } from './img-arg-prog.component';

describe('ImgArgProgComponent', () => {
  let component: ImgArgProgComponent;
  let fixture: ComponentFixture<ImgArgProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgArgProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgArgProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
