import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EnhancementDocsComponent } from './enhancement-docs.component';

describe('EnhancementDocsComponent', () => {
  let component: EnhancementDocsComponent;
  let fixture: ComponentFixture<EnhancementDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnhancementDocsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EnhancementDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
