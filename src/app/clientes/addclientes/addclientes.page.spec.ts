import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddclientesPage } from './addclientes.page';

describe('AddclientesPage', () => {
  let component: AddclientesPage;
  let fixture: ComponentFixture<AddclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
