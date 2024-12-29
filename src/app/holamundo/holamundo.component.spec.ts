/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HolamundoComponent } from './holamundo.component';

describe('HolamundoComponent', () => {
  let component: HolamundoComponent;
  let fixture: ComponentFixture<HolamundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolamundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolamundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
