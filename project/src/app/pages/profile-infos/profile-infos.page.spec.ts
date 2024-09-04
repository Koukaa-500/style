import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileInfosPage } from './profile-infos.page';

describe('ProfileInfosPage', () => {
  let component: ProfileInfosPage;
  let fixture: ComponentFixture<ProfileInfosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
