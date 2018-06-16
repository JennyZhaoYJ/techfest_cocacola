import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Machine }         from '../machine';
import { MachineService }  from '../machine.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: [ './machine-detail.component.css' ]
})
export class MachineDetailComponent implements OnInit {
  @Input() machine: Machine;

  constructor(
    private route: ActivatedRoute,
    private machineService: MachineService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMachine();
  }

  getMachine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.machineService.getMachine(id)
      .subscribe(machine => this.machine = machine);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.machineService.updateMachine(this.machine)
      .subscribe(() => this.goBack());
  }
}
