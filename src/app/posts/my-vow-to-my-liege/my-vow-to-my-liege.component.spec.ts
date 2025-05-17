import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVowToMyLiegeComponent } from './my-vow-to-my-liege.component';

describe('MyVowToMyLiegeComponent', () => {
  let component: MyVowToMyLiegeComponent;
  let fixture: ComponentFixture<MyVowToMyLiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyVowToMyLiegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVowToMyLiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
