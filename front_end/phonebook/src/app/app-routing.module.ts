import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AddEntryComponent} from "./add-entry/add-entry.component";
import {EntryDetailsComponent} from "./entry-details/entry-details.component";
import {EditEntryComponent} from "./edit-entry/edit-entry.component";

const routes: Routes = [
  {path: 'phonebook', component: ListComponent},
  {path: 'phonebook/add', component:AddEntryComponent},
  {path: 'phonebook/:id/edit', component: EditEntryComponent},
  {path: 'phonebook/:id', component: EntryDetailsComponent},
  {path: '', redirectTo:'phonebook', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
