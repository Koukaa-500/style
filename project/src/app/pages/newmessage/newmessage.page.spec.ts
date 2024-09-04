import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewmessagePage } from './newmessage.page';

describe('NewmessagePage', () => {
  let component: NewmessagePage;
  let fixture: ComponentFixture<NewmessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
