import {Component, OnInit} from '@angular/core';
import {Entry} from "../models/entry";
import {ActivatedRoute, Router} from "@angular/router";
import {PhonebookService} from "../services/phonebook.service";

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {

  public entry?: Entry;

  constructor(private phonebookService: PhonebookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.phonebookService.getEntryById(this.route.snapshot.paramMap.get('id')).subscribe((r: any) => {
      this.entry = r;
    });
  }

  onSubmit() {
    // @ts-ignore
    if (this.entry.name.length == 0 || this.entry.phoneNumber.length != 9) return;
    // @ts-ignore
    this.phonebookService.updateEntry(this.entry).subscribe(_ => {
      // @ts-ignore
      this.router.navigate(['/phonebook/' + this.entry.id]);
    });
  }

}
