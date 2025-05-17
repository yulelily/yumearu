import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerImageComponent } from './spoiler-image.component';

describe('SpoilerImageComponent', () => {
  let component: SpoilerImageComponent;
  let fixture: ComponentFixture<SpoilerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpoilerImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpoilerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
