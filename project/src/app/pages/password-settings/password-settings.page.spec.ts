import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordSettingsPage } from './password-settings.page';

describe('PasswordSettingsPage', () => {
  let component: PasswordSettingsPage;
  let fixture: ComponentFixture<PasswordSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
