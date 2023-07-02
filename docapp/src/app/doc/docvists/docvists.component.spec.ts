import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocvistsComponent } from './docvists.component';

describe('DocvistsComponent', () => {
  let component: DocvistsComponent;
  let fixture: ComponentFixture<DocvistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocvistsComponent]
    });
    fixture = TestBed.createComponent(DocvistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
