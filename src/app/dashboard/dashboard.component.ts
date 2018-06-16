import { Component, OnInit } from '@angular/core';
import { Machine } from '../machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  machines: Machine[] = [];

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachines()
      .subscribe(machines => this.machines = machines.slice(0, 5));
  }
}