import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import {FormsModule} from "@angular/forms";
import { EditEntryComponent } from './edit-entry/edit-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageNotFoundComponent,
    AddEntryComponent,
    EntryDetailsComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
