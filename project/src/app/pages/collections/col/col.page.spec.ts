import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColPage } from './col.page';

describe('ColPage', () => {
  let component: ColPage;
  let fixture: ComponentFixture<ColPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
