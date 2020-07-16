import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitationFieldsComponent } from './solicitation-fields/solicitation-fields.component';
import { SubmittedPageComponent } from './submitted-page/submitted-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SolicitationFieldsComponent,
    SubmittedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
