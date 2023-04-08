import {Component, OnInit} from '@angular/core';
import {Entry} from "../models/entry";
import {PhonebookService} from "../services/phonebook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entries?: Entry[];

  constructor(private phonebookService: PhonebookService, private router: Router) {
  }

  ngOnInit() {
    this.phonebookService.getPhonebookEntries().subscribe((r: any) => {
      this.entries = r;
    });
  }

  public delete(id: any) {
    this.phonebookService.removeEntry(id).subscribe(r => {
      window.location.reload();
    });
  }

}
