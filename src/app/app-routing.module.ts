import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MachinesComponent }      from './machines/machines.component';
import { MachineDetailComponent }  from './machine-detail/machine-detail.component';
import { MachineErrorComponent }  from './machine-error/machine-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MachineDetailComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'machineerrors', component: MachineErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
