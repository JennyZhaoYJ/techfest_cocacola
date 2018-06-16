import { Component, OnInit } from '@angular/core';

import { Machine } from '../machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines: Machine[];

  constructor(private machineService: MachineService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachines()
    .subscribe(machines => this.machines = machines);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.machineService.addMachine({ name } as Machine)
      .subscribe(machine => {
        this.machines.push(machine);
      });
  }

  delete(machine: Machine): void {
    this.machines = this.machines.filter(h => h !== machine);
    this.machineService.deleteMachine(machine).subscribe();
  }

}
