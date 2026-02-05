import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first2/my-first2.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirst2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
