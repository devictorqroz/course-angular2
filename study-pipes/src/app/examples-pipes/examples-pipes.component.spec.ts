/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExamplesPipesComponent } from './examples-pipes.component';

describe('ExamplesPipesComponent', () => {
  let component: ExamplesPipesComponent;
  let fixture: ComponentFixture<ExamplesPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
