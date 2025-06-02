import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVacancySectionComponent } from './post-vacancy-section.component';

describe('PostVacancySectionComponent', () => {
  let component: PostVacancySectionComponent;
  let fixture: ComponentFixture<PostVacancySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVacancySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVacancySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
