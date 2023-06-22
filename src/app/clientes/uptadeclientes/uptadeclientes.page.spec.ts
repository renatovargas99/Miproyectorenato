import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UptadeclientesPage } from './uptadeclientes.page';

describe('UptadeclientesPage', () => {
  let component: UptadeclientesPage;
  let fixture: ComponentFixture<UptadeclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UptadeclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
