/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyFirst2Component } from './my-first2.component';

describe('MyFirst2Component', () => {
  let component: MyFirst2Component;
  let fixture: ComponentFixture<MyFirst2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirst2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
