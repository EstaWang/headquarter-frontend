import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FlowComponent } from './flow.component';
import { ImportFilesComponent } from './importFiles.component';
import { ParseFilesComponent } from './parseFiles.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowComponent,
    ImportFilesComponent,
    ParseFilesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
