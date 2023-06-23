import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarclientesPage } from './listarclientes.page';

describe('ListarclientesPage', () => {
  let component: ListarclientesPage;
  let fixture: ComponentFixture<ListarclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarclientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

