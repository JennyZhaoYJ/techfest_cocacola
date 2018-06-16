import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Machine } from '../machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-machine-search',
  templateUrl: './machine-search.component.html',
  styleUrls: [ './machine-search.component.css' ]
})
export class MachineSearchComponent implements OnInit {
  machines$: Observable<Machine[]>;
  private searchTerms = new Subject<string>();

  constructor(private machineService: MachineService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.machines$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.machineService.searchMachines(term)),
    );
  }
}
