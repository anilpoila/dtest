import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocvistsComponent } from './docvists.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: DocvistsComponent,
  },
];

@NgModule({
  declarations: [DocvistsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(route)],
})
export class DocvistsModule {}
