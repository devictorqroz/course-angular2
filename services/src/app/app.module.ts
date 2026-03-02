import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesService } from './courses/courses.service';
import { CreateCourseModule } from './create-course/create-course.module';
import { CoursesModule } from './courses/courses.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CreateCourseModule,
    CoursesModule
  ],
  providers: [LogService],
  // providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
