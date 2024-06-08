import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiguitosComponent } from './amiguitos.component';

describe('AmiguitosComponent', () => {
  let component: AmiguitosComponent;
  let fixture: ComponentFixture<AmiguitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmiguitosComponent]
    });
    fixture = TestBed.createComponent(AmiguitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});