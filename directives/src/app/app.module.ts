import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { ExampleComponent } from './example/example.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { ExampleNgContentComponent } from './example-ng-content/example-ng-content.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';
import { CustomizedDirectivesComponent } from './customized-directives/customized-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    ExampleComponent,
    DirectiveNgswitchComponent,
    DirectiveNgforComponent,
    DirectiveNgclassComponent,
    DirectiveNgstyleComponent,
    ElvisOperatorComponent,
    ExampleNgContentComponent,
    BackgroundYellowDirective,
    CustomizedDirectivesComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
