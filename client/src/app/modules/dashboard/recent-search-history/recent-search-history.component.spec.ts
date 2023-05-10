import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RecentSearchHistoryComponent } from './recent-search-history.component';

describe('RecentSearchHistoryComponent', () => {
  let component: RecentSearchHistoryComponent;
  let fixture: ComponentFixture<RecentSearchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ RecentSearchHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
