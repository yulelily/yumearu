import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerTextComponent } from './spoiler-text.component';

describe('SpoilerTextComponent', () => {
  let component: SpoilerTextComponent;
  let fixture: ComponentFixture<SpoilerTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpoilerTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpoilerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
