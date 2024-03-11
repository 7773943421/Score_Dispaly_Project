import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetestNewsComponent } from './letest-news.component';

describe('LetestNewsComponent', () => {
  let component: LetestNewsComponent;
  let fixture: ComponentFixture<LetestNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetestNewsComponent]
    });
    fixture = TestBed.createComponent(LetestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
