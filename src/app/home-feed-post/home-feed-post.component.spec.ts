import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedPostComponent } from './home-feed-post.component';

describe('HomeFeedPostComponent', () => {
  let component: HomeFeedPostComponent;
  let fixture: ComponentFixture<HomeFeedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeedPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
