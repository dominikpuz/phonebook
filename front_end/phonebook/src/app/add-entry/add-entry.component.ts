import { Component } from '@angular/core';
import {PhonebookService} from "../services/phonebook.service";
import {Entry} from "../models/entry";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {
  public name: string;
  public phoneNumber: string;

  constructor(private phonebookService: PhonebookService, private router: Router) {
    this.name = "";
    this.phoneNumber = "";
  }

  onSubmit() {
    if (this.name.length == 0 || this.phoneNumber.length != 9) return;
    let entry: Entry = {
      name: this.name,
      phoneNumber: this.phoneNumber
    };
    this.phonebookService.addEntry(entry).subscribe(_ => {
      this.router.navigate(['phonebook']);
    });
  }

}
