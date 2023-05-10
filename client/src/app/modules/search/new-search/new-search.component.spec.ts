import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewSearchComponent } from './new-search.component';

describe('NewSearchComponent', () => {
  let component: NewSearchComponent;
  let fixture: ComponentFixture<NewSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSearchComponent],
      imports: [NgbModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
