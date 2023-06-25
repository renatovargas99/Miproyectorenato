import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteclientesPage } from './deleteclientes.page';

describe('DeleteclientesPage', () => {
  let component: DeleteclientesPage;
  let fixture: ComponentFixture<DeleteclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteclientesPage);
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

