import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Machine }         from '../machine';
import { MachineService }  from '../machine.service';

@Component({
  selector: 'app-machine-error',
  templateUrl: './machine-error.component.html',
  styleUrls: [ './machine-error.component.css' ]
})
export class MachineErrorComponent implements OnInit {
  @Input() machine: Machine;

  constructor(
    private route: ActivatedRoute,
    private machineService: MachineService,
    private location: Location
  ) {}

  ngOnInit(): void {
    //this.getMachine();
  }

  /**getMachine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.machineService.getMachine(id)
      .subscribe(machine => this.machine = machine);
  }

  goBack(): void {
    this.location.back();
  }**/

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/