import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestoranesPage } from './restoranes.page';

describe('RestoranesPage', () => {
  let component: RestoranesPage;
  let fixture: ComponentFixture<RestoranesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestoranesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
