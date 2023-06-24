import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailclientesPage } from './detailclientes.page';

describe('DetailclientesPage', () => {
  let component: DetailclientesPage;
  let fixture: ComponentFixture<DetailclientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailclientesPage);
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

