import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTextComponent } from './join-text.component';

describe('JoinTextComponent', () => {
  let component: JoinTextComponent;
  let fixture: ComponentFixture<JoinTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
