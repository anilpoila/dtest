import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [InputTextModule],
  exports: [CommonModule, FormsModule,InputTextModule],
})
export class SharedModule {}
