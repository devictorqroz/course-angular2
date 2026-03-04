import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExamplesPipesComponent } from './examples-pipes/examples-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FilterArrayPipe } from './filter-array.pipe';
import { FilterArrayImpurePipe } from './filter-array-impure.pipe';

export function localeFactory(settingsService: SettingsService) {
  return settingsService.getLocale();
}

@NgModule({
  declarations: [
    AppComponent,
    ExamplesPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
    FilterArrayImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: localeFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
