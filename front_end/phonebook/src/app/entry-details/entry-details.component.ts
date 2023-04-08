import {Component, OnInit} from '@angular/core';
import {Entry} from "../models/entry";
import {PhonebookService} from "../services/phonebook.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  public entry?: Entry;

  constructor(private phonebookService: PhonebookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.phonebookService.getEntryById(this.route.snapshot.paramMap.get('id')).subscribe((r: any) => {
      this.entry = r;
    });
  }

  public delete(id: any) {
    this.phonebookService.removeEntry(id).subscribe(r => {
      this.router.navigate(['phonebook']);
    });
  }

}
