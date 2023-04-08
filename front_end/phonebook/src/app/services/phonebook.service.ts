import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Entry} from "../models/entry";

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': 'http://localhost:8080'
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

@Injectable({
  providedIn: 'root'
})

export class PhonebookService {

  constructor(private httpClient: HttpClient) { }

  public getPhonebookEntries() {
    return this.httpClient.get(environment.backEnd, requestOptions);
  }

  public getEntryById(id: any) {
    return this.httpClient.get(environment.backEnd + '/' + id, requestOptions);
  }

  public removeEntry(id: any) {
    return this.httpClient.delete(environment.backEnd + '/' + id);
  }

  public addEntry(entry: Entry) {
    return this.httpClient.post(environment.backEnd + '/add', JSON.stringify(entry), requestOptions);
  }

  public updateEntry(entry: Entry) {
    return this.httpClient.put(environment.backEnd + '/' + entry.id, entry, requestOptions);

  }
}
