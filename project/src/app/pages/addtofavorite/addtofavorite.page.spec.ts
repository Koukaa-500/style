import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddtofavoritePage } from './addtofavorite.page';

describe('AddtofavoritePage', () => {
  let component: AddtofavoritePage;
  let fixture: ComponentFixture<AddtofavoritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtofavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
