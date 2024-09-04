import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WardrobesPage } from './wardrobes.page';

describe('WardrobesPage', () => {
  let component: WardrobesPage;
  let fixture: ComponentFixture<WardrobesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WardrobesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
