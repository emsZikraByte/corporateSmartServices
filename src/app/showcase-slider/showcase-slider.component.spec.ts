import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSliderComponent } from './showcase-slider.component';

describe('ShowcaseSliderComponent', () => {
  let component: ShowcaseSliderComponent;
  let fixture: ComponentFixture<ShowcaseSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
